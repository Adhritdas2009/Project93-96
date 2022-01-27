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



function addRoom(){
  room_name= document.getElementById("add").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room"
});
  localStorage.setItem("Roomname", room_name);
  window.location="chat_place.html";
  document.getElementById("room_name").value="";
}


function Welcome(){
  welcome_user= localStorage.getItem("Username")
  document.getElementById("welc").innerHTML="Welcome " + welcome_user + "!"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
console.log(Room_names);
row = "<div class='room_name' id="+ Room_names +" onclick='redirect(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;
  //End code
  });});}
getData();





function redirect(name){
  console.log(name);
  localStorage.setItem("Roomname", name);
  window.location= "chat_place.html";
}

function logout(){
  localStorage.removeItem("Roomname");
  localStorage.removeItem("Username");
  window.location="index.html";
}

