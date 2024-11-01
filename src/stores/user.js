import { defineStore } from 'pinia';
import axios from 'axios';
import { validateFields } from '@/utils';

const baseURL = import.meta.env.VITE_API_BASE_URL;

const validationSchema = {
  email: [
    { type: 'required', label: 'Email' },
    { type: 'email' },
  ],
  password: [
    { type: 'required', label: 'Password' },
  ],
};

export const useUserStore = defineStore('user', {
  state: () => ({
    email: '',
    password: '',
    errors: {},
    isLoading: false,
    showPassword: false,
    isVerified: false,
    verificationToken: '',
    success: {},
    authToken: '',
    redirectToEmail: false,
  }),

  actions: {
    validateField(field) {    
      const formData = { email: this.email, password: this.password };
      const fieldErrors = validateFields(formData, validationSchema, field);
      this.errors[field] = fieldErrors[field];
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    validateForm() {      
      const formData = { email: this.email, password: this.password };
      this.errors = validateFields(formData, validationSchema);
      return Object.keys(this.errors).length === 0;
    },

    async signIn() {
      this.success.general = '';
      this.errors.general = '';
      if (!this.validateForm()) return;
      this.isLoading = true;
      try {
        let data = JSON.stringify({
          email: this.email,
          password: this.password
        });
        const response = await axios.post(
          `${baseURL}/api/signin`,
          data,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        if (response.status === 200) {
          this.isVerified = response?.data?.is_verified;
          if(!this.isVerified){
            this.verificationToken = response?.data?.verification_token;
            this.redirectToEmail = true;
            return;
          }
          this.authToken = response?.data?.token;
          this.success.general = 'Login successful! Welcome back.';  // Set success message
        }else{
          this.errors.general = 'Login failed. Please check your credentials.';  
        }
      } catch (error) {
        console.error('Login failed', error.response?.data?.message || error.message);
        this.errors.general = 'Login failed. Please check your credentials.';
      } finally {
        this.isLoading = false;
      }
    },
    async verifyUser() {
      console.log("`${baseURL}/api/verify-email/${this.verificationToken}`,", `${baseURL}/api/verify-email/${this.verificationToken}`,)
      try {
        const response = await axios.post(
          `${baseURL}/api/verify-email/${this.verificationToken}`,
          {},
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        if (response.status === 200) {
          this.isVerified = true;
          this.success.general = 'User verified successfully!';
        } else {
          this.errors.general = 'Verification failed. Please try again.';
        }
      } catch (error) {
        console.error('Verification failed', error.response?.data?.message || error.message);
        this.errors.general = 'Verification failed. Please try again.';
      }
    }
  },
});