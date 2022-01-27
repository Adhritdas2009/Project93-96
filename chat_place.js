var firebaseConfig = {
    apiKey: "AIzaSyAqsGLOtT356DdVZa4RDJs86Y6b5iqoqXE",
    authDomain: "kwitter-f015a.firebaseapp.com",
    databaseURL: "https://kwitter-f015a-default-rtdb.firebaseio.com",
    projectId: "kwitter-f015a",
    storageBucket: "kwitter-f015a.appspot.com",
    messagingSenderId: "205363678448",
    appId: "1:205363678448:web:72f8e1deab8f0349d04635"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  roomname=localStorage.getItem("Roomname")
  user_name=localStorage.getItem("Username")

  function getData() 
  { 
      firebase.database().ref("/"+roomname).on('value', function(snapshot) 
  { 
      document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
  { 
      childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") 
  {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

names = message_data["name"];
message= message_data["message"];
likes= message_data["like"];
name_tag="<h2>"+ names +" <img src='tick.png' class='user_tick'></h2>";
message_tag="<h3>"+  message +"</h3>";
like_tag="<button class='btn btn-info' onclick='updateLike(this.id)' id="+ firebase_message_id +" >";
span_tag="<span class='glyphicon glyphicon-thumbs-up'></span> Like: "+ likes +"</button>";
row = name_tag+message_tag+like_tag+span_tag;
document.getElementById("output").innerHTML+=row;

//End code
 } });  }); }
getData();


function updateLike(message_id) 
{ 
    button_id = message_id;
     likes1 = document.getElementById(button_id).value; 
     likes_in_number = Number(likes1) + 1; 
     console.log(likes_in_number); 
     firebase.database().ref(roomname).child(message_id).update(
         { like: likes_in_number 
         }
         );
         }













  function send(){
      
      message1= document.getElementById("msg").value;
     
      firebase.database().ref(roomname).push({
          name:user_name,
          message:message1,
          like:0
      }) 
      document.getElementById("msg").value="";
  }


  function logout(){
    localStorage.removeItem("Roomname");
    localStorage.removeItem("Username");
    window.location="index.html";
  }