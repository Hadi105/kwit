// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyBS_Iluph8Sn2bLSf_TrpO9iKg8Z-j_Iug",
    authDomain: "kwitter-e877f.firebaseapp.com",
    databaseURL: "https://kwitter-e877f-default-rtdb.firebaseio.com",
    projectId: "kwitter-e877f",
    storageBucket: "kwitter-e877f.appspot.com",
    messagingSenderId: "661763875286",
    appId: "1:661763875286:web:2eef3c650a55acb7c94477"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}



