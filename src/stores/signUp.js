import { defineStore } from 'pinia'
import { validateFields } from '@/utils'
import axios from 'axios'
const baseURL = import.meta.env.VITE_API_BASE_URL

const validationSchema = {
  password: [
    { type: 'required', label: 'Password' },
    { type: 'passwordStrength', label: 'Password' },
  ],
  email: [
    { type: 'required', label: 'Email' },
    { type: 'email', label: 'Email' },
  ],
  companyName: [
    { type: 'required', label: 'Company name' },
    { type: 'text', label: 'Company name' },
  ],
  firstName: [
    { type: 'required', label: 'First name' },
    { type: 'text', label: 'First name' },
    { type: 'maxLength', value: 20, label: 'First name' },
    { type: 'minLength', value: 3, label: 'First name' },
  ],
  lastName: [
    { type: 'required', label: 'Last name' },
    { type: 'text', label: 'Last name' },
    { type: 'maxLength', value: 20, label: 'Last name' },
    { type: 'minLength', value: 3, label: 'Last name' },
  ],
  terms: [
    { type: 'required', label: 'Terms' },
    { type: 'boolean', label: 'Terms' },
  ],
}

export const useCreateAccount = defineStore('signUp', {
  state: () => ({
    isTermsAccepted: false,
    showModalTerm: false,
    showModalPrivacy: false,
    isLoading: false,
    showPassword: false,
    isPasswordFocused: false,
    moveToNextStep: false,
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    password: '',
    referralCode: '',
    errors: {},
    success: {},
  }),
  actions: {
    validateField(field) {
      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        companyName: this.companyName,
        email: this.email,
        password: this.password,
        referralCode: this.referralCode,
        terms: this.isTermsAccepted,
      }
      const fieldErrors = validateFields(formData, validationSchema, field)
      this.errors[field] = fieldErrors[field]
    },
    togglePasswordVisibility(field) {
      if (field === 'showPassword') {
        this.showPassword = !this.showPassword
      }
    },
    validateForm() {
      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        companyName: this.companyName,
        email: this.email,
        password: this.password,
        referralCode: this.referralCode,
        terms: this.isTermsAccepted,
      }

      this.errors = validateFields(formData, validationSchema)
      return Object.keys(this.errors).length === 0
    },
    handleTermModal() {
      this.showModalTerm = !this.showModalTerm
    },
    handlePrivacyModal() {
      this.showModalPrivacy = !this.showModalPrivacy
    },
    async checkEmailValidity() {
      try {
        const response = await axios.post(
          `${baseURL}/api/check-email`,
          JSON.stringify({ email: this.email }),
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        if (response.data.exists) {
          this.errors.email = 'Email already exists!'
        } else {
          this.errors.email = ''
        }
      } catch (error) {
        console.error('Error checking email validity:', error)
        this.errors.email = 'Error checking email validity'
      }
    },
    async resendVerificationEmail(userEmail) {
      try {
        this.errors.general = ''
        this.success.general = ''
        const response = await axios.post(
          `${baseURL}/api/resend-verification-email`,
          JSON.stringify({ email: userEmail }),
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        if (response.status === 200) {
          this.success.general = 'Verification email sent!'
        } else {
          this.errors.general = 'Unable to send verification email!'
        }
      } catch (error) {
        console.error('Error resending verification email:', error)
        this.errors.general = 'Error resending verification email'
      }
    },
  },
})
