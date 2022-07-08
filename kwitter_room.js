const firebaseConfig = {
    apiKey: "AIzaSyCWzbWs41YdNjF7K0fTvimOxG2KhndM-QI",
    authDomain: "kwitter-5d858.firebaseapp.com",
    databaseURL: "https://kwitter-5d858-default-rtdb.firebaseio.com",
    projectId: "kwitter-5d858",
    storageBucket: "kwitter-5d858.appspot.com",
    messagingSenderId: "870492180233",
    appId: "1:870492180233:web:30476b8a4f332b6d5d4dd8"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
    document.getElementById("user_name1").innerHTML="Welcome! "+user_name;

    function addRoom()
    {
          room_name= document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });

          localStorage.setItem("room_name", room_name);

          window.location= "kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;


       console.log("Room Name - " + Room_names);
       row= "<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;

      
      });});}
getData();

function logout() {
      window.location="index.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location= "kwitter_page.html";
}