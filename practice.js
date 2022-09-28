const firebaseConfig = {
    apiKey: "AIzaSyDR6R6Gky_axxqces6cYt1fUtleqp8VJyM",
    authDomain: "kwitter-6b276.firebaseapp.com",
    databaseURL: "https://kwitter-6b276-default-rtdb.firebaseio.com",
    projectId: "kwitter-6b276",
    storageBucket: "kwitter-6b276.appspot.com",
    messagingSenderId: "340646181520",
    appId: "1:340646181520:web:8d7efab744d89be0257615",
    measurementId: "G-YMVSJPP9Q2"
  };

  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
  }