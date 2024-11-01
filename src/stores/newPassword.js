import { defineStore } from 'pinia'
import axios from 'axios'
import { validateFields } from '@/utils'

const baseURL = import.meta.env.VITE_API_BASE_URL
const validationSchema = {
  password: [
    { type: 'required', label: 'Password' },
    { type: 'passwordStrength', label: 'Password' },
  ],
  confirmPassword: [
    { type: 'required', label: 'Confirm Password' },
    { type: 'match', field: 'password', label: 'Confirm Password' },
  ],
  email: [
    { type: 'required', label: 'Email' },
    { type: 'email', label: 'Email' },
  ],
  company: [{ type: 'required', label: 'Company' }],
  name: [{ type: 'required', label: 'Name' }],
  terms: [
    { type: 'required', label: 'Terms' },
    { type: 'boolean', label: 'Terms' },
  ],
}

export const useNewPasswordStore = defineStore('newPassword', {
  state: () => ({
    isTermsAccepted: false,
    showModalTerm: false,
    showModalPrivacy: false,
    password: '',
    confirmPassword: '',
    isLoading: false,
    showPassword: false,
    showConfirmPassword: false,
    isPasswordFocused: false,
    userName: '',
    userCompany: '',
    userEmail: '',
    errors: {},
    success: {},
    token: '',
  }),

  actions: {
    validateField(field) {
      const formData = {
        email: this.userEmail,
        name: this.userName,
        company: this.userCompany,
        password: this.password,
        confirmPassword: this.confirmPassword,
        terms: this.isTermsAccepted,
      }
      const fieldErrors = validateFields(formData, validationSchema, field)
      this.errors[field] = fieldErrors[field]
    },
    togglePasswordVisibility(field) {
      if (field === 'showPassword') {
        this.showPassword = !this.showPassword
      } else if (field === 'showConfirmPassword') {
        this.showConfirmPassword = !this.showConfirmPassword
      }
    },
    validateForm() {
      const formData = {
        email: this.userEmail,
        name: this.userName,
        company: this.userCompany,
        password: this.password,
        confirmPassword: this.confirmPassword,
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
    async validateToken(token) {
      this.isLoading = true
      this.errors = {} // Clear any previous errors
      if (!token) {
        this.errors.general = 'Invalid or expired token. Please try again.'
        this.isLoading = false
        return
      }
      try {
        const response = await axios.get(
          `${baseURL}/api/validate-token/${token}`,
        )
        if (response.status === 200) {
          this.userName = response?.data?.userName
          this.userEmail = response?.data?.email
          this.userCompany = response?.data?.company
          this.token = token
        } else {
          this.errors.general = 'Invalid or expired token. Please try again.'
          this.isLoading = false
          return
        }
      } catch (error) {
        console.error('Token validation failed:', error.message)
        this.errors.general = 'Invalid or expired token. Please try again.'
      } finally {
        this.isLoading = false
      }
    },
    async createPassword() {
      if (!this.validateForm()) return
      this.isLoading = true
      try {
        let data = JSON.stringify({
          password: this.password,
        })
        const response = await axios.post(
          `${baseURL}/api/password-reset/${this.token}`,
          data,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        if (response.status === 200) {
          this.success.general = 'Password updated successfully!'
          return true
        } else {
          this.errors.general = 'Failed to update password. Please try again.'
        }
      } catch (error) {
        console.error('Password update failed:', error.message)
        this.errors.general = 'Error updating password. Please try again.'
      } finally {
        this.isLoading = false
      }
    },
  },
})
