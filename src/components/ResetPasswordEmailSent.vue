<script setup>
import { useResetPasswordStore } from '@/stores/resetPassword';
import { storeToRefs } from 'pinia';

defineOptions({
  name: "ResetPasswordEmailSent",
});

const resetPasswordStore = useResetPasswordStore();
const { email } = storeToRefs(resetPasswordStore);
// const localEmail = ref(email.value);

const resendEmail = async () => {
  await resetPasswordStore.sendResetPasswordEmail();
};
</script>

<template>
  <h1 class="form-heading">Email Sent</h1>
  <form class="form" style="gap: 24px; margin:12px 0px">
    <div class="reset-email-response-text-container">
      <span>
        A password reset link has been sent to <span>“{{ email }}”</span>.
      </span>
      <span>Just click on the link in that email to complete the password reset process.</span>
    </div>
    <hr class="divider" />
    <div class="signup-prompt">
      <span style="color: #000000">Haven’t received any email?</span>
      <span
        style="min-width: fit-content; color: #571459; text-decoration: none; cursor: pointer;"
        @click="resendEmail"
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
