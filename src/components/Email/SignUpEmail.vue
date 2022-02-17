<template>
  <div class="sign-up-email">
    <h2>Want to create a new one?</h2>
    <form>
      <div class="form-control">
        <label for="displayName">Display Name</label>
        <input type="text" id="displayName" v-model="displayName" />
      </div>
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div class="form-control">
        <label for="password">Password Confirm</label>
        <input type="password" id="password" v-model="passwordConfirm" />
      </div>
      <DxButton
        text="Sign up"
        @click="signUpWithEmail"
        styling-mode="outlined"
        type="default"
        :width="220"
        :height="50"
      />
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import DxButton from "devextreme-vue/button";

const displayName = ref("");
const email = ref("");
const password = ref("");
const passwordConfirm = ref("");

const store = useStore();
const router = useRouter();

function signUpWithEmail() {
  store.dispatch("emailSignUp", {
    displayName: displayName.value,
    email: email.value,
    password: password.value,
  });
  router.replace("/google");
}
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