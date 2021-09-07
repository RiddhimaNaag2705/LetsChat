var firebaseConfig = {
    apiKey: "AIzaSyBdPhhdti_pHFfWaHOyHR57xcbPmp9SotQ",
    authDomain: "letschat-ed056.firebaseapp.com",
    databaseURL: "https://letschat-ed056-default-rtdb.firebaseio.com",
    projectId: "letschat-ed056",
    storageBucket: "letschat-ed056.appspot.com",
    messagingSenderId: "17159965451",
    appId: "1:17159965451:web:1fcbc0817aa9f16903700e",
    measurementId: "G-C0YXTTJDM8"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("User");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
  function addgroup(){
    group_name=document.getElementById("group-name").value;
    firebase.database().ref("/").child(group_name).update({
      purpose: "adding group name"
    });
    localStorage.setItem("groupname", group_name);
   window.location="chatroom.html";
  }
 function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
Room_names=childKey;
row="<div class='groupName' id='"+Room_names+"' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
});});}
function redirectToRoomName(name){
  localStorage.setItem("groupname", name);
  window.location="chatroom.html";
}