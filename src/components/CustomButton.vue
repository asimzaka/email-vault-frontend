<script setup>
import { computed, defineProps, defineEmits } from "vue";

// Define props for customization
const props = defineProps({
  color: { type: String, default: "primary" },
  disabled: { type: Boolean, default: false },
  variant: { type: String, default: "contained" },
  type: { type: String, default: "button" },
});

// Emit the click event to parent
const emit = defineEmits(["click"]);
const handleClick = () => {
  if (!props.disabled) emit("click");
};

// Computed classes based on props
const colorClass = computed(() => `custom-button--${props.color}`);
const disabledClass = computed(() =>
  props.disabled ? "custom-button--disabled" : ""
);
const variantClass = computed(() => `custom-button--${props.variant}`);
</script>

<style scoped>
.custom-button {
  padding: 8px 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
  /* Added transition for transform */
  overflow: hidden;
}

/* Click Scale Effect */
.custom-button:not(.custom-button--disabled):active {
  transform: scale(0.97);
}

/* Color Variants */
.custom-button--primary {
  background-color: #571158;
  color: white;
  box-shadow: 0px 4px 4px 0px #00000040;
}

.custom-button--secondary {
  background-color: #fff;
  color: white;
}

.custom-button--outlined {
  background-color: transparent;
  border: 1px solid #000000 !important;
  
  color: #000000;
  font-weight: 500;
}

.custom-button-size {
  min-width: 132px;
  font-size: clamp(12px, 2vw, 16px);
  padding-right: 26px;
  padding-left: 26px;
  padding-top: clamp(6px, 2vw, 11px);
  padding-bottom: clamp(6px, 2vw, 11px);
}

/* Disabled State */
.custom-button--disabled {
  color: #fff;
  cursor: not-allowed;
  opacity: 0.2;
}

.custom-button:not(.custom-button--disabled):hover {
  opacity: 0.9;
}
</style>

<template>
  <button
    :class="[
      'custom-button',
      colorClass,
      variantClass,
      'custom-button-size',
      disabledClass,
    ]"
    @click="handleClick"
    :disabled="props.disabled"
    :type="props.type"
  >
    <slot></slot>
  </button>
</template>
