import {signInWithPopup, signOut} from "firebase/auth"
import {auth, googleprovider} from "../firebase"

export const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleprovider);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

export const logout = async () => {
    try {
      await signOut(auth);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };