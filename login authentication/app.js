// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjpO_M7cDBBHiPDq_eWgnJwGUWluKKMrk",
  authDomain: "netphlix-8aeb5.firebaseapp.com",
  projectId: "netphlix-8aeb5",
  storageBucket: "netphlix-8aeb5.appspot.com",
  messagingSenderId: "235688136642",
  appId: "1:235688136642:web:ec5c6bd8656729e40b105b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

function register() {
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  f_name = document.getElementById("f_name").value;

  if (validate_email(email) == false || validate_password(password) == false) {
    alert("wrong password or email.");
    return;
  }
  if (validate_field(f_name) == false) {
    alert("Name cant be empty.");
    return;
  }

  auth
    .createUserWithEmailAndPassword(emial, password)
    .then(function () {
      var user = auth.currentUser;

      var database_ref = database.ref();

      var userData = {
        email: email,
        f_name: f_name,
        last_login=Date.now();
      };

      database.ref.child('users/'+user.uid).set(userData);

      alert("User Created")
    })
    .catch(function (error) {
      var error_code = error.code;
      var error_message = error.message;

      alert(message);
    });
}

// validation part
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/.test(str);
  // test is used for compate regular expression and a string.
  if (expression.test(email) == true) {
    return true;
  } else {
    return false;
  }
}

function validate_password(password) {
  if (password < 6) {
    return false;
  } else {
    return true;
  }
}

function validate_field(field) {
  if (field == null) {
    return false;
  } else if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
}
