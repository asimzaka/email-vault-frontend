import { defineStore } from 'pinia';
import axios from 'axios';
import { validateFields } from '@/utils';

// Load environment variables
const baseURL = import.meta.env.VITE_API_BASE_URL;

const validationSchema = {
  email: [
    { type: 'required', label: 'Email' },
    { type: 'email' },
  ]
};

export const useResetPasswordStore = defineStore('resetPassword', {
  state: () => ({
    email: '',
    errors: {},
    emailSent: false,
    isLoading: false,    
  }),
  actions: {
    validateField(field) {    
      const formData = { email: this.email };
      const fieldErrors = validateFields(formData, validationSchema, field);
      // Only update the error for the specific field
      this.errors[field] = fieldErrors[field];
    },    
    validateForm() {      
      const formData = { email: this.email };
      this.errors = validateFields(formData, validationSchema);
      return Object.keys(this.errors).length === 0;
    },
    async sendResetPasswordEmail() {
      if (!this.validateForm()) return;
      this.isLoading = true;
      try {
        let data = JSON.stringify({
          email: this.email,
        });
        const response = await axios.post(
          `${baseURL}/api/password-reset/request`,
          data,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        if (response.status === 200) {
          this.emailSent = true;
        }
      } catch (error) {
        console.error('Failed to send email', error.response?.data?.message || error.message);
        if(error.status === 400){
          this.errors.general = 'No, User exist agianst this email!';
        }else{
          this.errors.general = 'Failed to send reset password email';
        }        
      } finally {
        this.isLoading = false;
      }
    },
  },
});