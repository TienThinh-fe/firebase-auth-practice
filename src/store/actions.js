import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { provider } from "../firebase/firebase.utils";

const actions = {
  googleSignIn(context) {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("TOKEN: ", token);
        console.log("USER: ", user);
        context.state.userAuth = user;
        context.state.isLogin = true;
      })
      .catch((error) => {
        console.error(error.message);
      });
  },
  emailSignIn(context, payload) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, payload.email, payload.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        context.state.userAuth = user;
        context.state.isLogin = true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error code in email sign in: ", errorCode);
        console.log("Error message in email sign in: ", errorMessage);
      });
  },
  emailSignUp(context, payload) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, payload.email, payload.password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: payload.displayName,
        })
          .then(() => {
            console.log(payload);
            context.state.userAuth = user;
            context.state.isLogin = true;
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error code in email sign up: ", errorCode);
        console.log("Error message in email sign up: ", errorMessage);
      });
  },
  signOut(context) {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        context.state.userAuth = null;
        context.state.isLogin = false;
      })
      .catch((error) => {
        console.log(error.message);
      });
  },
};

export default actions;
