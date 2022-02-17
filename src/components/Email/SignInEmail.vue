<template>
  <div class="sign-in-email">
    <h2>Already have an account?</h2>
    <form>
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <DxButton
        text="Sign in"
        @click="signInWithEmail"
        styling-mode="Contained"
        type="default"
        :width="220"
        :height="50"
      />
    </form>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref } from "vue";
import DxButton from "devextreme-vue/button";

const email = ref("");
const password = ref("");

const store = useStore();
const router = useRouter();

const signInWithEmail = () => {
  store.dispatch("emailSignIn", {
    email: email.value,
    password: password.value,
  });
  router.replace("/google");
};
</script>

<style scoped>
.form-control {
  display: flex;
  flex-direction: column;
}

.form-control label {
  margin: 20px 0 8px 0;
  font-size: 16px;
}

.form-control input {
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
}

.dx-button {
  margin: 24px 0;
}
</style>