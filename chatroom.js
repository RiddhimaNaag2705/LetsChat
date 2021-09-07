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
  userName=localStorage.getItem("User");
  groupName=localStorage.getItem("groupname");
  function send(){
      Msg=document.getElementById("type").value;
      firebase.database().ref(groupName).push({
          name: userName,
          message: Msg,
          like: 0
      });
      document.getElementById("type").value="";
  }
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
 firebase_message_id = childKey;
  message_data = childData;
  }});});}

