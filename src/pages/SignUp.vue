<script setup>
import BillingMethod from "@/components/BillingMethod.vue";
import CreateAccount from "@/components/CreateAccount.vue";
import VerificationEmailSent from "@/components/VerificationEmailSent.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { useCreateAccount } from "@/stores/signUp";
import { useBillingDetails } from "@/stores/billingDetails";
import { storeToRefs } from "pinia";

// Get reactive refs from stores
const newUserAccount = useCreateAccount();
const newBillingDetails = useBillingDetails();

const { moveToNextStep, email } = storeToRefs(newUserAccount);
const { moveToVerifyEmail } = storeToRefs(newBillingDetails);  // Reactive binding
</script>

<template>
  <DefaultLayout>
    <template #formContent>
      <div class="form-wrapper">        
        <CreateAccount v-if="!moveToNextStep" />
        <BillingMethod v-else-if="moveToNextStep && !moveToVerifyEmail" />
        <VerificationEmailSent v-if="moveToVerifyEmail" :email="email"/>
      </div>
    </template>
  </DefaultLayout>
</template>