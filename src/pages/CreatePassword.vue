<script setup>
import EyeIcon from "@/assets/svgs/EyeIcon.vue";
import EyeOffIcon from "@/assets/svgs/EyeOffIcon.vue";
import CustomButton from "@/components/CustomButton.vue";
import PasswordStrengthMeter from "@/components/PasswordStrengthMeter.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import ModalLayout from "@/layouts/ModalLayout.vue";
import { onMounted, computed } from "vue";
import { useNewPasswordStore } from "@/stores/newPassword";
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";

defineOptions({
  name: "CreatePassword",
});

const newPasswordStore = useNewPasswordStore();
const {
  userName,
  userCompany,
  userEmail,
  password,
  confirmPassword,
  showPassword,
  showConfirmPassword,
  isPasswordFocused,
  isTermsAccepted,
  showModalTerm,
  showModalPrivacy,
  errors,
  success
} = storeToRefs(newPasswordStore);
const {
  togglePasswordVisibility,
  handleTermModal,
  handlePrivacyModal,
  createPassword,
  validateField,
} = newPasswordStore;

const route = useRoute();
const router = useRouter()

onMounted(() => {
  const token = route.query.token; // Retrieve the token from the URL query parameters
  newPasswordStore.validateToken(token); // Call the validation action in the store
});

const handlePasswordBlur = () => {
  isPasswordFocused.value = false;
  validateField("password");
  validateField("confirmPassword");
};

const isFormValid = computed(() => {
  return (
    isTermsAccepted.value &&
    password.value &&
    confirmPassword.value &&
    !errors.value.password &&
    !errors.value.confirmPassword &&
    password.value === confirmPassword.value
  );
});

const redirectTo = path => {
  router.push(path)
}

const handleContinue = () => {
  if(createPassword()){    
      redirectTo('/sign-in');
  }
};

</script>

<template>
  <DefaultLayout>
    <template #formContent>
      <div class="form-wrapper">
        <div v-if="errors.general" class="error-alert">
          <span>{{ errors.general }}</span>
        </div>
        <div v-if="success.general" class="success-alert">
          <span>{{ success.general }}</span>
        </div>
        <h1 class="form-heading">Create Password</h1>
        <p class="form-tagline">
          Thank you for finishing the account creation. To proceed, please set
          your password and you'll be ready to get started.
        </p>

        <form class="form" style="gap: 8px">
          <div class="user-info-wrapper">
            <div class="user-info-container">
              <span> Name </span>
              <span>{{ userName }}</span>
            </div>
            <div class="user-info-container">
              <span> Company </span>
              <span>{{ userCompany }}</span>
            </div>
            <div class="user-info-container">
              <span> Email Address </span>
              <span> {{ userEmail }} </span>
            </div>
          </div>
          <div class="password-field-container">
            <div class="form-data">
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  width: 100%;
                "
              >
                <label class="form-label" for="password">Password</label>
                <div style="display: flex; align-items: center">
                  <PasswordStrengthMeter
                    v-if="isPasswordFocused"
                    :password-value="password"
                  />
                </div>
              </div>
              <div class="password-input-wrapper">
                <input
                  class="form-input"
                  :type="showPassword ? 'text' : 'password'"
                  name="password"
                  placeholder="Enter your password"
                  style="height: clamp(46px, 3vw, 52px)"
                  v-model="password"
                  @focus="isPasswordFocused = true"
                  @blur="handlePasswordBlur"
                  :disabled="!userName"
                />                
                <button
                  class="icon-placement"
                  type="button"
                  @click="togglePasswordVisibility('showPassword')"
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
            <div class="form-data">
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  width: 100%;
                "
              >
                <label class="form-label" for="password"
                  >Confirm Password</label
                >
              </div>
              <div class="password-input-wrapper">
                <input
                  class="form-input"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  name="confirmPassword"
                  placeholder="Retype your password"
                  style="height: clamp(46px, 3vw, 52px)"
                  v-model="confirmPassword"
                  @blur="handlePasswordBlur"
                  :disabled="!userName"
                />                
                <button
                  class="icon-placement"
                  type="button"
                  @click="togglePasswordVisibility('showConfirmPassword')"
                  aria-label="Toggle password visibility"
                >
                  <EyeIcon v-if="!showConfirmPassword" />
                  <EyeOffIcon v-else />
                </button>
              </div>
              <span class="error-message" v-if="errors.confirmPassword">{{
                errors.confirmPassword
              }}</span>
            </div>
          </div>
          <div class="terms-and-privacy-div">
            <input
              type="checkbox"
              v-model="isTermsAccepted"
              style="width: 16px; height: 16px; accent-color: #571158"
              :disabled="!userName"
            />
            <span style="color: #2d3643; font-size: clamp(10px, 2vw, 16px)"
              >I agree to the</span
            >
            <span @click="handleTermModal" class="terms-and-privacy-text"
              >Terms and Conditions</span
            >
            <span style="color: #2d3643; font-size: clamp(10px, 2vw, 16px)"
              >and</span
            >
            <span @click="handlePrivacyModal" class="terms-and-privacy-text"
              >Privacy Policy</span
            >
          </div>
          <span class="error-message" v-if="errors.terms">{{
            errors.terms
          }}</span>

          <div class="button-container" @click="handleContinue">
            <CustomButton
              color="primary"
              variant="contained"
              size="large"
              :disabled="!isFormValid"
            >
              Continue
            </CustomButton>
          </div>

          <hr class="divider" />

          <div class="signup-prompt" style="margin-top: 8px">
            <span>Already have an account?</span>
            <a href="#" @click="redirectTo('/sign-in')">Sign In</a>
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
      </div>
    </template>
  </DefaultLayout>
</template>

<style scoped>
.required-sterick {
  color: #571158;
}

.button-container button {
  min-width: 157px;
}
.user-info-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 24px 0px;
  border-bottom: 1px solid #0000001f;
  gap: 14px;
}

.user-info-container {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.user-info-container span:first-of-type {
  font-size: clamp(10px, 2vw, 14px);
  font-weight: 400;
  line-height: 13.64px;
  letter-spacing: 0.30000001192092896px;
  text-align: left;
  color: #6c757d;
}
.user-info-container span:last-of-type {
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 400;
  line-height: 19.1px;
  letter-spacing: 0.30000001192092896px;
  text-align: left;
  color: #000000;
}
.password-field-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 12px 0px;
}
</style>
