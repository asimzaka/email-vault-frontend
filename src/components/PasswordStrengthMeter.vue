<template>
  <div class="meter-wrapper">
    <ul class="meter-list">
      <li :style="getListItemStyle(1)"></li>
      <li :style="getListItemStyle(2)"></li>
      <li :style="getListItemStyle(3)"></li>
    </ul>
    <div class="popup-wrapper">
      <div class="popup-container">
        <span style="font-size: clamp(12px, 2vw, 14px); font-weight: 700"
          >Please fulfill the below requirements:</span
        >
        <div
          class="validation-text-container"
          :class="{
            validated: passwordChecks.isMinLength,
            'not-validated': !passwordChecks.isMinLength,
          }"
        >
          <span>At least 8 characters in length</span>
          <span v-if="passwordChecks.isMinLength"><CircularCheckIcon /></span>
          <span v-else><CrossIcon /></span>
        </div>
        <div
          class="validation-text-container"
          :class="{
            validated: passwordChecks.hasUppercase,
            'not-validated': !passwordChecks.hasUppercase,
          }"
        >
          <span>At least 1 uppercase character</span>
          <span v-if="passwordChecks.hasUppercase"><CircularCheckIcon /></span>
          <span v-else><CrossIcon /></span>
        </div>
        <div
          class="validation-text-container"
          :class="{
            validated: passwordChecks.hasLowercase,
            'not-validated': !passwordChecks.hasLowercase,
          }"
        >
          <span>At least 1 lowercase character</span>
          <span v-if="passwordChecks.hasLowercase"><CircularCheckIcon /></span>
          <span v-else><CrossIcon /></span>
        </div>
        <div
          class="validation-text-container"
          :class="{
            validated: passwordChecks.hasNumber,
            'not-validated': !passwordChecks.hasNumber,
          }"
        >
          <span>At least 1 number</span>
          <span v-if="passwordChecks.hasNumber"><CircularCheckIcon /></span>
          <span v-else><CrossIcon /></span>
        </div>
        <div
          class="validation-text-container"
          :class="{
            validated: passwordChecks.hasSpecialChar,
            'not-validated': !passwordChecks.hasSpecialChar,
          }"
        >
          <span>At least 1 special character</span>
          <span v-if="passwordChecks.hasSpecialChar"
            ><CircularCheckIcon
          /></span>
          <span v-else><CrossIcon /></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import CircularCheckIcon from "../assets/svgs/CircularCheckIcon.vue";
import CrossIcon from "../assets/svgs/CrossIcon.vue";

defineOptions({
  name: "PasswordStrengthMeter",
});
const props = defineProps({
  passwordValue: String, // Define the expected type
});

const passwordChecks = computed(() => ({
  isMinLength: props.passwordValue.length >= 8,
  hasUppercase: /[A-Z]/.test(props.passwordValue),
  hasLowercase: /[a-z]/.test(props.passwordValue),
  hasNumber: /[0-9]/.test(props.passwordValue),
  hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(props.passwordValue),
}));

const getPasswordStrength = () => {
  const checksMet = Object.values(passwordChecks.value).filter(Boolean).length;

  if (checksMet === 0) {
    return 0; // No strength
  } else if (checksMet === 1) {
    return 1; // Weak
  } else if (checksMet <= 3) {
    return 2; // Medium
  } else if (checksMet === 5) {
    return 3; // Strong, only if all checks are met
  } else {
    return 2; // Otherwise, it's medium strength
  }
};


const passwordStrength = computed(() => getPasswordStrength());

const getListItemStyle = (index) => {
  if (passwordStrength.value === 1 && index === 1) {
    return { backgroundColor: '#fc5a5a' };
  } else if (passwordStrength.value === 2 && index <= 2) {
    return { backgroundColor: '#FDC23A' };
  } else if (passwordStrength.value === 3) {
    return { backgroundColor: '#42a496' };
  } else {
    return { backgroundColor: '#DADADA' };
  }
};


</script>

<style scoped>
.meter-wrapper {
  display: flex;
  width: 120px;
  position: relative;
}

.meter-list {
  display: flex;
  position: relative;
  list-style: none;
  padding: 0px;
  margin: 0px;
  gap: 2px;
  width: 100%;
}
.meter-list li {
  flex: 1;
  padding: 2.5px;
  border-radius: 9999px;
}

.popup-wrapper {
  position: absolute;
  background-color: #fff;
  width: 282px;
  height: 194px;
  padding: 12px 16px 12px 16px;
  border-radius: 6px;
  box-shadow: 0px 4px 27px 0px #00000040;
  z-index: 20;
  left: 100%;
  margin-left: 8px;
}

.popup-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 10px;
}

.validation-text-container {
  display: flex;
  justify-content: space-between;
  font-size: clamp(12px, 2vw, 14px);
  font-weight: 600;
}

.not-validated {
  color: #fc5a5a;
}
.validated {
  color: #42a496;
}
</style>
