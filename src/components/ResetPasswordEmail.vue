<script setup>
import { useRouter } from "vue-router";
import CustomButton from "./CustomButton.vue";
import { useResetPasswordStore } from "@/stores/resetPassword";
import { storeToRefs } from "pinia";

defineOptions({
  name: "ResetPasswordEmail",
});

const resetPasswordStore = useResetPasswordStore();
const { email, isLoading, errors } = storeToRefs(resetPasswordStore);

const router = useRouter();

// Handle form submission
const handleSubmit = async () => {
  // Validate the email field using the store's validation method
  resetPasswordStore.validateField("email");

  // Check if there are any validation errors
  if (!errors.value.email) {
    await resetPasswordStore.sendResetPasswordEmail();
  }
};

// Redirect to sign-in page
const redirectToSignIn = () => {
  router.push("/sign-in");
};
</script>

<template>
  <div v-if="errors.general" class="error-alert">    
    <span>{{ errors.general }}</span>
  </div>

  <h1 class="form-heading">Reset Password</h1>
  <p class="form-tagline">
    Having trouble logging in to your account? Please enter your email below to
    reset your password.
  </p>
  <form class="form" style="gap: 24px" @submit.prevent="handleSubmit">
    <div class="form-data">
      <input
        class="form-input"
        type="email"
        name="email"
        placeholder="Email"
        v-model="email"
        @blur="() => resetPasswordStore.validateField('email')"
      />
      <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
    </div>

    <div class="button-container">
      <CustomButton
        color="primary"
        variant="contained"
        size="large"
        :disabled="isLoading"
        @click="handleSubmit"
      >
        {{ isLoading ? "Sending..." : "Reset password" }}
      </CustomButton>
    </div>
    <hr class="divider" />
    <div class="signup-prompt">
      <span style="color: #606060">Already have an account?</span>
      <a href="#" @click.prevent="redirectToSignIn">Sign In</a>
    </div>
  </form>
</template>
