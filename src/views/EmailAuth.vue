<template>
  <div class="email-auth">
    <sign-in-email />
    <sign-up-email />
  </div>
</template>

<script setup>
import SignInEmail from "../components/Email/SignInEmail.vue";
import SignUpEmail from "../components/Email/SignUpEmail.vue";
</script>

<style scoped>
.email-auth {
  display: flex;
  justify-content: space-evenly;
}
</style>