<script setup>
defineOptions({
  name: "DefaultLayout",
});
</script>

<template>
  <div class="layout-wrapper">
    <div id="left-container">
      <div class="container-item">
        <div class="slot-container">
          <slot name="formContent"></slot>
        </div>
        <footer class="layout-footer">
          <span>© 2023 Email Vault, Inc. All rights reserved | </span>
          <span>support@emailvault.app</span>
        </footer>
      </div>
    </div>
    <div id="right-container">
      <div class="container-item-container">
        <div class="image-container">
          <img src="@/assets/images/email-vault.png" alt="email-vault" />
        </div>
        <h2>Email Vault</h2>
        <p>
          Our email journaling solution grants you security, compliance, and
          peace of mind.
        </p>
      </div>
    </div>
  </div>
</template>
