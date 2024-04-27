import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "cafe-loco.firebaseapp.com",
  projectId: "cafe-loco",
  storageBucket: "cafe-loco.appspot.com",
};

const app = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();
provider.setCustomParameters({   
    prompt : "select_account "
});

export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signOutGoogle = () => signOut(auth).then(() => {
    localStorage.removeItem("accessToken");
    console.log("logged out")
    window.location.reload();
  }).catch((error) => {
    console.log("error")
  });