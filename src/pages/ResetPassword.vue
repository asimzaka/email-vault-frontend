<script setup>
import { useResetPasswordStore } from '@/stores/resetPassword';
import ResetPasswordEmail from '@/components/ResetPasswordEmail.vue';
import ResetPasswordEmailSent from '@/components/ResetPasswordEmailSent.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { storeToRefs } from 'pinia';

const resetPasswordStore = useResetPasswordStore();
const { emailSent } = storeToRefs(resetPasswordStore);
</script>

<template>
  <DefaultLayout>
    <template #formContent>
      <div class="form-wrapper" v-if="emailSent">
        <ResetPasswordEmailSent />
      </div>
      <div class="form-wrapper" v-else>
        <ResetPasswordEmail />
      </div>
    </template>
  </DefaultLayout>
</template>
