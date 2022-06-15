
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { seedDatabase } from "../seed";


// we need config here

const config = {
  apiKey: "AIzaSyBP-aS2rxsH2BG4T5Bbt_OGWuCpDDR0rmw",
  authDomain: "netflix2-799bf.firebaseapp.com",
  projectId: "netflix2-799bf",
  storageBucket: "netflix2-799bf.appspot.com",
  messagingSenderId: "193541802613",
  appId: "1:193541802613:web:318d609362291d4f3f463c",
};

const Firebase = firebase.initializeApp(config);
// export const auth = Firebase.auth();
// seedDatabase(app)

export { Firebase };
