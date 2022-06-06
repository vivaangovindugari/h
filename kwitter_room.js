var firebaseConfig = {
    apiKey: "AIzaSyAeymVXkEchmqJQoEdoPbf67hE_8c_o2dg",
    authDomain: "jkkk-602dc.firebaseapp.com",
    databaseURL: "https://jkkk-602dc-default-rtdb.firebaseio.com",
    projectId: "jkkk-602dc",
    storageBucket: "jkkk-602dc.appspot.com",
    messagingSenderId: "835069395553",
    appId: "1:835069395553:web:8f8febab0c2103e8b22020",
    measurementId: "G-LSE3G68FMJ"
  };
  firebase.initializeApp(firebaseConfig);
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();