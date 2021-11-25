const firebaseConfig = {
      apiKey: "AIzaSyCpW4_vt6hgWdUlkJ8mUHKHU-E_496syUQ",
      authDomain: "quit-and-cry.firebaseapp.com",
      databaseURL: "https://quit-and-cry-default-rtdb.firebaseio.com",
      projectId: "quit-and-cry",
      storageBucket: "quit-and-cry.appspot.com",
      messagingSenderId: "27995990702",
      appId: "1:27995990702:web:8e0972f72d9cccbf6b9b3f"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
