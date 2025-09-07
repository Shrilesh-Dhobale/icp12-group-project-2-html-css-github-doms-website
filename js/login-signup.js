import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
 
const firebaseConfig = {
    apiKey: "AIzaSyAWS9lGO5qId8_qudQyBnvbCKOdh1y74tQ",
    authDomain: "doms-4fdf1.firebaseapp.com",
    databaseURL: "https://doms-4fdf1-default-rtdb.firebaseio.com",
    projectId: "doms-4fdf1",
    storageBucket: "doms-4fdf1.appspot.com",
    messagingSenderId: "127515121312",
    appId: "1:127515121312:web:71cd8317c51f5672f8dbc5",
    measurementId: "G-R0EFFCEW7Z"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app);

document.getElementById('signUp').addEventListener('click', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        set(ref(database, 'users/' + user.uid), {
          username: username,
          email: email
        });
        showToast("✅ Account created successfully! Please login.");
         document.getElementById('signup-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
      })
      .catch((error) => {
        showToast("❌ " + error.message, false);
      });
});
document.getElementById('loginBtn').addEventListener('click', (e) => {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

     signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        showToast("✅ Login successful!");
        setTimeout(() => {
          window.location.href = "index.html";
        }, 2000);
      })
       .catch((error) => {
        showToast("❌ " + error.message, false);
      });
