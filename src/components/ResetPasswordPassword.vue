<script setup>
import ModalLayout from '@/layouts/ModalLayout.vue'
import CustomButton from './CustomButton.vue'
import { ref } from 'vue'
import PasswordStrengthMeter from './PasswordStrengthMeter.vue'
import EyeIcon from '@/assets/svgs/EyeIcon.vue'
import EyeOffIcon from '@/assets/svgs/EyeOffIcon.vue'

defineOptions({
  name: 'ResetPasswordPassword',
})
const isPasswordVisible = ref(false)
const isTermsAccepted = ref(false)
const showModalTerm = ref(false)
const showModalPrivacy = ref(false)

// Method to toggle password visibility
const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value
}

const handleTermModal = () => {
  showModalTerm.value = !showModalTerm.value
}
const handlePrivacyModal = () => {
  showModalPrivacy.value = !showModalPrivacy.value
}
</script>
<template>
  <h1 class="form-heading">Reset Password</h1>
  <p class="form-tagline">Please enter your new password</p>
  <form class="form" style="gap: 24px">
    <div class="form-data">
      <div style="display: flex; justify-content: space-between; width: 100%">
        <label class="form-label" for="password">Password</label>
        <div style="display: flex; align-items: center">
          <PasswordStrengthMeter />
        </div>
      </div>
      <div class="password-input-wrapper">
        <input
          class="form-input"
          :type="isPasswordVisible ? 'text' : 'password'"
          name="password"
          placeholder="Enter your password"
        />
        <button
          class="icon-placement"
          type="button"
          @click="togglePasswordVisibility"
          aria-label="Toggle password visibility"
        >
          <EyeIcon v-if="!isPasswordVisible" />
          <EyeOffIcon v-else />
        </button>
      </div>
    </div>
    <div class="terms-and-privacy-div">
      <input
        type="checkbox"
        v-model="isTermsAccepted"
        style="width: 16px; height: 16px; accent-color: #571158"
      />
      <span style="color: #2d3643; font-size: clamp(10px, 2vw, 16px)"
        >I agree to the</span
      >
      <span @click="handleTermModal" class="terms-and-privacy-text"
        >Terms and Conditions</span
      >
      <span style="color: #2d3643; font-size: clamp(10px, 2vw, 16px)">and</span>
      <span @click="handlePrivacyModal" class="terms-and-privacy-text"
        >Privacy Policy</span
      >
    </div>
    <div class="button-container">
      <CustomButton
        color="primary"
        variant="contained"
        size="large"
        :disabled="false"
      >
        Continue
      </CustomButton>
    </div>
    <hr class="divider" />
    <div class="signup-prompt">
      <span style="color: #606060">Already have an account?</span>
      <a href="#">Sign In</a>
    </div>
  </form>

  <ModalLayout
    v-if="showModalTerm"
    :privacyPolicy="false"
    :handleModalState="handleTermModal"
  />
  <ModalLayout
    v-if="showModalPrivacy"
    :privacyPolicy="true"
    :handleModalState="handlePrivacyModal"
  />
</template>
