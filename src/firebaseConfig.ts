import { initializeApp } from 'firebase/app'; // Import the Firebase SDK

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIMt98p8sEkVAKgF5YYDg5NRsw9rik0mw",
  authDomain: "app-foodbank.firebaseapp.com",
  databaseURL: "https://app-foodbank-default-rtdb.firebaseio.com",
  projectId: "app-foodbank",
  storageBucket: "app-foodbank.appspot.com",
  messagingSenderId: "911471866608",
  appId: "1:911471866608:web:97b71856d7f9df6cb38835"
};

// Remove or comment this line if you are not using 'app' anywhere
// const app = initializeApp(firebaseConfig);

export default firebaseConfig;
