<script setup>
import InformationIcon from "@/assets/svgs/InformationIcon.vue";
import CustomButton from "./CustomButton.vue";
import { computed, watch } from "vue";
import visaCard from "@/assets/images/visa-card.png";
import masterCard from "@/assets/images/master-card.png";
import americanExpress from "@/assets/images/american-express.png";
import discoverCard from "@/assets/images/discover-card.png";
import { useBillingDetails } from "@/stores/billingDetails";
import { useCreateAccount } from "@/stores/signUp";
import { storeToRefs } from "pinia";

defineOptions({
  name: "BillingMethod",
});

const newUserAccount = useCreateAccount();
const { moveToNextStep } = storeToRefs(newUserAccount);

const newBillingDetails = useBillingDetails();
const { cardName, cardNumber, expirationDate, cvv, cardType, errors } =
  storeToRefs(newBillingDetails);

const handleBack = () => {
  moveToNextStep.value = false;
};

const { validateField, detectCardType } = newBillingDetails;

const handleFieldBlur = (field) => {
  validateField(field);
};


const triggerSignUp = () => {
  newBillingDetails.handleSignUp();
};

const cardTypeIcon = computed(() => {
  switch (cardType.value) {
    case "Visa":
      return visaCard;
    case "MasterCard":
      return masterCard;
    case "American Express":
      return americanExpress;
    case "Discover":
      return discoverCard;
    default:
      return "";
  }
});

watch(cardNumber, () => {
  detectCardType();
});

const isFormValid = computed(() => {
  return (
    cardName.value && !errors.value.cardName &&
    cardNumber.value && !errors.value.cardNumber &&
    expirationDate.value && !errors.value.expirationDate &&
    cvv.value && !errors.value.cvv
  );
}); 

</script>
<template>
  <h1 class="form-heading">Add Billing Method</h1>
  <p class="form-tagline">Please enter your billing details below</p>

  <form class="form" style="gap: 8px">
    <div class="form-data">
      <label class="form-label" for="=cardName"
        >Name on card <span class="required-sterick">*</span></label
      >
      <input
        class="form-input"
        type="text"
        name="cardName"
        placeholder="Ex. Adam"
        v-model="cardName"
        @blur="handleFieldBlur('cardName')"
      />
      <span class="error-message" v-if="errors.cardName">{{
        errors.cardName
      }}</span>
    </div>

    <div class="form-data">
      <label class="form-label" for="cardNumber"
        >Card number <span class="required-sterick">*</span></label
      >
      <div class="carnumber-field">
        <input
          style="padding-left: 40px"
          class="form-input"
          type="text"
          name="cardNumber"
          v-model="cardNumber"
          @blur="handleFieldBlur('cardNumber')"
          placeholder="#### #### #### ####"
          v-mask="'#### #### #### ####'"
        />
        <div class="card-image-container">
          <img :src="cardTypeIcon" :alt="cardType" />
        </div>
      </div>
      <span class="error-message" v-if="errors.cardNumber">{{
        errors.cardNumber
      }}</span>
    </div>
    <div class="expiration-cvv">
      <div class="form-data">
        <label class="form-label" for="expirationDate"
          >Expiration date <span class="required-sterick">*</span></label
        >
        <input
          class="form-input"
          type="text"
          name="expirationDate"
          placeholder="12/24"
          v-mask="'##/##'"
          v-model="expirationDate"
          @blur="handleFieldBlur('expirationDate')"
        />
        <span class="error-message" v-if="errors.expirationDate">{{
          errors.expirationDate
        }}</span>
      </div>
      <div class="form-data">
        <label class="form-label" for="cvv"
          >CVV <span class="required-sterick">*</span></label
        >
        <input
          class="form-input"
          type="text"
          name="cvv"
          placeholder="CVV"
          v-mask="'###'"
          v-model="cvv"
          @blur="handleFieldBlur('cvv')"
        />
        <span class="error-message" v-if="errors.cvv">{{ errors.cvv }}</span>
      </div>
    </div>
    <div class="info-container">
      <span><InformationIcon /></span>
      <span>
        Your credit card will not be charged for 30 days. Cancel anytime in the
        next 30 days free of charge.
      </span>
    </div>
    <div class="button-container">
      <CustomButton color="secondary" variant="outlined" @click="handleBack"> Back </CustomButton>
      <CustomButton color="primary" size="large" :disabled="!isFormValid" @click="triggerSignUp">
        Sign Up
      </CustomButton>
    </div>

    <hr class="divider" />
  </form>
</template>

<style scoped>
.expiration-cvv {
  display: flex;
  flex: 1;
  gap: 10px;
  justify-content: space-between;
}
.info-container {
  display: flex;
  flex-direction: row;
  gap: 4px;
  width: 100%;
}

.carnumber-field {
  width: 100%;
  position: relative;
}
.card-image-container {
  position: absolute;
  top: 50%;
  transform: translateY(-60%);
  width: 30px;
  height: 15px;
  left: 6px;
}
.card-image-container img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.button-container button {
  min-width: 157px;
}
</style>
