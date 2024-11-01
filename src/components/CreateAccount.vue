<script setup>
import EyeIcon from "@/assets/svgs/EyeIcon.vue";
import EyeOffIcon from "@/assets/svgs/EyeOffIcon.vue";
import CustomButton from "@/components/CustomButton.vue";
import PasswordStrengthMeter from "@/components/PasswordStrengthMeter.vue";
import ModalLayout from "@/layouts/ModalLayout.vue";
import { useRoute, useRouter } from "vue-router";
import { useCreateAccount } from "@/stores/signUp";
import { storeToRefs } from "pinia";
import { computed } from "vue";

defineOptions({ name: "CreateAccount" });

const newUserAccount = useCreateAccount();

const {
  isTermsAccepted,
  showModalTerm,
  showModalPrivacy,
  showPassword,
  isPasswordFocused,
  firstName,
  lastName,
  companyName,
  email,
  password,
  referralCode,
  errors,
  moveToNextStep
} = storeToRefs(newUserAccount);

const {
  togglePasswordVisibility,
  handleTermModal,
  handlePrivacyModal,
  validateField,
  checkEmailValidity
} = newUserAccount;

const router = useRouter();
const route = useRoute();
referralCode.value = route.query.referal;

const isFormValid = computed(() => {
  return (
    firstName.value && !errors.value.firstName &&
    lastName.value && !errors.value.lastName &&
    companyName.value && !errors.value.companyName &&
    email.value && !errors.value.email &&
    password.value && !errors.value.password &&
    isTermsAccepted.value && !errors.value.term   
  );
});

const handleFieldBlur = (field) => {
  isPasswordFocused.value = false;
  validateField(field);  
};

const handleContinue = async () => {
  await checkEmailValidity()
  if(!errors.value.email)
    moveToNextStep.value = true;
};

const redirectTo = (path) => {
  router.push(path);
};
</script>

<template>
  <h1 class="form-heading">Create Account</h1>
  <p class="form-tagline">
    Welcome to Email Vault, please enter your login credentials below to start
    using the application.
  </p>

  <form class="form" style="gap: 8px">
    <div class="form-data">
      <label class="form-label" for="firstName"
        >First Name <span class="required-sterick">*</span></label
      >
      <input
        class="form-input"
        type="text"
        name="firstName"
        v-model="firstName"
        placeholder="Enter your first name"
        @blur="handleFieldBlur('firstName')"
      />
      <span class="error-message" v-if="errors.firstName">{{
        errors.firstName
      }}</span>
    </div>

    <div class="form-data">
      <label class="form-label" for="lastName"
        >Last Name <span class="required-sterick">*</span></label
      >
      <input
        class="form-input"
        type="text"
        name="lastName"
        v-model="lastName"
        placeholder="Enter your last name"
        @blur="handleFieldBlur('lastName')"
      />
      <span class="error-message" v-if="errors.lastName">{{
        errors.lastName
      }}</span>
    </div>

    <div class="form-data">
      <label class="form-label" for="companyName"
        >Company Name <span class="required-sterick">*</span></label
      >
      <input
        class="form-input"
        type="text"
        name="companyName"
        v-model="companyName"
        placeholder="Enter your company name"
        @blur="handleFieldBlur('companyName')"
      />
      <span class="error-message" v-if="errors.companyName">{{
        errors.companyName
      }}</span>
    </div>

    <div class="form-data">
      <label class="form-label" for="email"
        >Email <span class="required-sterick">*</span></label
      >
      <input
        class="form-input"
        type="email"
        name="email"
        v-model="email"
        placeholder="Enter your email"
        @blur="handleFieldBlur('email')"
      />
      <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
    </div>

    <div class="form-data">
      <div style="display: flex; justify-content: space-between; width: 100%">
        <label class="form-label" for="password"
          >Password <span class="required-sterick">*</span></label
        >
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
          v-model="password"
          @focus="isPasswordFocused = true"
          @blur="handleFieldBlur('password')"
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
      <label class="form-label" for="referralCode">Referral Code</label>
      <input
        class="form-input"
        type="text"
        name="referralCode"
        v-model="referralCode"
        placeholder="Enter referral code"
        :disabled="route.query.referal"  
      />
      <span class="error-message" v-if="errors.referralCode">{{
        errors.referralCode
      }}</span>
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
        :disabled="!isFormValid"
        @click="handleContinue"
      >
        Continue
      </CustomButton>
    </div>

    <hr class="divider" />

    <div class="signup-prompt">
      <span style="color: #606060">Ready to Partner with us as an MSP?</span>
      <a href="#">Sign Up here</a>
    </div>

    <div class="signup-prompt" style="margin-top: 8px">
      <span>Already have an account?</span>
      <a href="#" @click.prevent="redirectTo('sign-in')">Sign In</a>
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

<style scoped>
.required-sterick {
  color: #571158;
}

.button-container button {
  min-width: 157px;
}
.form-input:disabled {
  background-color: #e9e9e9;
  color: #6c757d; /* Optional: Change text color to a darker gray */
}
</style>