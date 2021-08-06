 var firebaseConfig = {
    apiKey: "AIzaSyCKLJtxpNIHBtQLvtY9dC81XohAPLH7Rus",
    authDomain: "chit-chatters-e0e6d.firebaseapp.com",
    databaseURL: "https://chit-chatters-e0e6d-default-rtdb.firebaseio.com/",
    projectId: "chit-chatters-e0e6d",
    storageBucket: "chit-chatters-e0e6d.appspot.com",
    messagingSenderId: "1035664957296",
    appId: "1:1035664957296:web:8fd9017808beeadb53b9b5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.database();
  var myName = prompt("Enter your name")
  var ref = db.ref('public');
  function sendMessage(){
    var message = document.getElementById("inp").value;
    ref.push().set({
      "sender": myName,
      "message": message
    });
    return false;
  }
 ref.on("child_added",function(snapshot){
  var data = snapshot.val()

  var html = "";
  var myClass = "special";
  if(data.sender == myName){
    html += "<li class="+ myClass +">";
  }
  else{
    html += "<li>";
  }
   html += data.sender + " : " + data.message;
  html += "</li><br>"
 document.getElementById("messages").innerHTML += html;
 });
