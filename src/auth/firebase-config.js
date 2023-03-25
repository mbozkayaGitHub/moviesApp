
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyD4VKpW4qaOyGngMqQGwGsEfA3ESuzAfZk",
  authDomain: "moviesapp-26ec8.firebaseapp.com",
  databaseURL: "https://moviesapp-26ec8-default-rtdb.firebaseio.com",
  projectId: "moviesapp-26ec8",
  storageBucket: "moviesapp-26ec8.appspot.com",
  messagingSenderId: "14406187537",
  appId: "1:14406187537:web:0e85b87474b4394a9ecfb0"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)