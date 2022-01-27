function addUser(){
    username =document.getElementById("login_inp").value;
    localStorage.setItem("Username", username);
    if (username==""){
        document.getElementById("login_inp").innerHTML="Type username";
    }
    else{
        window.location="letschat.html";
    }
}