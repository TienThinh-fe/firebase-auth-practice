<template>
  <div class="google-auth-wrapper">
    <h1>{{ title }}</h1>
    <DxButton
      text="Google Sign In"
      @click="googleSignIn"
      styling-mode="Contained"
      type="default"
      :width="220"
      :height="50"
      v-if="!userAuth"
    />
    <DxButton
      text="Sign Out"
      @click="signOut"
      styling-mode="Contained"
      type="default"
      :width="220"
      :height="50"
      v-if="userAuth"
    />
    <DxButton
      text="Start with Email"
      @click="startWithEmail"
      styling-mode="Contained"
      type="default"
      :width="220"
      :height="50"
      icon="email"
      v-if="!userAuth"
    />
  </div>
</template>

<script>
import DxButton from "devextreme-vue/button";

export default {
  components: {
    DxButton,
  },
  computed: {
    isLogin() {
      return this.$store.getters.getIsLogin;
    },
    userAuth() {
      return this.$store.getters.getUserAuth;
    },
    title() {
      return this.isLogin
        ? `Welcome ${this.userAuth.displayName}`
        : "Login to start";
    },
  },
  methods: {
    googleSignIn() {
      this.$store.dispatch("googleSignIn");
    },
    signOut() {
      this.$store.dispatch("signOut");
    },
    startWithEmail() {
      this.$router.push("/email");
    },
  },
};
</script>

<style scoped>
.google-auth-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.dx-button {
  margin: 12px 0;
}
</style>