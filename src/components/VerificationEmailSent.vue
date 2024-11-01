<script setup>
import { useCreateAccount } from "@/stores/signUp";
import { storeToRefs } from "pinia";
import { defineProps } from "vue";

defineProps({
  email: {
    type: String,
    required: true,
  },
});

defineOptions({
  name: "VerificationEmailSent",
});

// Get reactive refs from stores
const newUserAccount = useCreateAccount();
const { errors, success } = storeToRefs(newUserAccount);
const { resendVerificationEmail } = newUserAccount;

</script>
<template>
  <div v-if="errors.general" class="error-alert">    
    <span>{{ errors.general }}</span>
  </div>
  <div v-if="success.general" class="success-alert">    
    <span>{{ success.general }}</span>
  </div>
  <h1 class="form-heading">Email Verification</h1>
  <form class="form" style="gap: 24px; margin:12px 0px">
    <div class="reset-email-response-text-container">
      <span>
        We are almost there! A confirmation email was sent to <span>“{{ email }}”</span>.
      </span>
      <span>To activate your account, Just click on the link in that email. If you cannot locate it, please have a look in your spam folder.</span>
    </div>
    <hr class="divider" />
    <div class="signup-prompt">
      <span style="color: #000000">Haven’t received any email?</span>
      <span
        style="min-width: fit-content; color: #571459; text-decoration: none; cursor: pointer;"
        @click="resendVerificationEmail(email)"
      >
        Resend Email
      </span>
    </div>
  </form>
</template>

<style scoped>
.reset-email-response-text-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 26px;
  color: #000000cc;
}
.reset-email-response-text-container span:nth-of-type(1) {
  font-size: clamp(14px, 2vw, 18px);
  text-align: left;
  letter-spacing: 0.14px;
}
.reset-email-response-text-container > span > span {
  font-size: clamp(14px, 2vw, 18px);
  font-weight: 600;
  text-align: left;
  letter-spacing: 0.14px;
}
.reset-email-response-text-container span:nth-of-type(2) {
  font-size: clamp(12px, 2vw, 16px);
  text-align: left;
  letter-spacing: 0.14px;
}
</style>
