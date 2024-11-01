<script setup>
import { useUserStore } from '@/stores/user'
import EyeIcon from '@/assets/svgs/EyeIcon.vue'
import EyeOffIcon from '@/assets/svgs/EyeOffIcon.vue'
import CustomButton from '@/components/CustomButton.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import VerificationEmailSent from '@/components/VerificationEmailSent.vue'
import { useRouter, useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const router = useRouter()
const route = useRoute()
// Pinia store
const userStore = useUserStore()
const {
  email,
  password,
  errors,
  isLoading,
  showPassword,
  success,
  verificationToken,
  redirectToEmail,
} = storeToRefs(userStore)

verificationToken.value = route.query.verification

onMounted(() => {
  if (route.query.verification) userStore.verifyUser()
})

const handleSignIn = () => {
  userStore.signIn()
}

const handleFieldBlur = field => {
  userStore.validateField(field)
}

const redirectTo = path => {
  router.push(path)
}
</script>

<template>
  <DefaultLayout>
    <template #formContent>
      <div class="form-wrapper">
        <VerificationEmailSent v-if="redirectToEmail" :email="email" />
        <div v-if="!redirectToEmail">
          <!-- Success/Failure Message -->
          <div v-if="errors.general" class="error-alert">
            <span>{{ errors.general }}</span>
          </div>
          <div v-if="success.general" class="success-alert">
            <span>{{ success.general }}</span>
          </div>
          <h1 class="form-heading">Sign In</h1>
          <p class="form-tagline">
            Welcome to Email Vault, please enter your login credentials below to
            start using the application.
          </p>
        </div>
        <form
          v-if="!redirectToEmail"
          class="form"
          @submit.prevent="handleSignIn"
        >
          <div class="form-data">
            <label class="form-label" for="email">Email</label>
            <input
              class="form-input"
              type="email"
              name="email"
              v-model="email"
              placeholder="Enter your email"
              required
              @blur="handleFieldBlur('email')"
            />
            <span class="error-message" v-if="errors.email">{{
              errors.email
            }}</span>
          </div>
          <div class="form-data">
            <label class="form-label" for="password">Password</label>
            <div class="password-input-wrapper">
              <input
                class="form-input"
                :type="showPassword ? 'text' : 'password'"
                name="password"
                v-model="password"
                placeholder="Enter your password"
                required
                @blur="handleFieldBlur('password')"
              />
              <button
                class="icon-placement"
                type="button"
                @click="userStore.togglePasswordVisibility"
                aria-label="Toggle password visibility"
              >
                <EyeIcon v-if="!showPassword" />
                <EyeOffIcon v-else />
              </button>
            </div>
            <span class="error-message" v-if="errors.password">{{
              errors.password
            }}</span>
          </div>
          <div class="forgot-password">
            <span @click.prevent="redirectTo('/reset-password')"
              >Forgot password?</span
            >
          </div>
          <div class="button-container">
            <CustomButton
              color="primary"
              variant="contained"
              size="large"
              :disabled="isLoading"
              @click="handleSignIn"
            >
              {{ isLoading ? 'Logging in...' : 'Sign In' }}
            </CustomButton>
          </div>
          <hr class="divider" />
          <div class="signup-prompt">
            <span>Don't have an account?</span>
            <a href="#" @click.prevent="redirectTo('/sign-up')"
              >Create account</a
            >
          </div>
        </form>
      </div>
    </template>
  </DefaultLayout>
</template>
