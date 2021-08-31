function signin(){
    User=document.getElementById("username").value;
    localStorage.setItem("User", User);
    window.location="chat.html";
}