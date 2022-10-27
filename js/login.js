     // Your web app's Firebase configuration
     var firebaseConfig = {
        apiKey: "AIzaSyBABA_RzbboifX_EdM273d2sfERrjXmYzc",
        authDomain: "sitechinfos.firebaseapp.com",
        databaseURL: "https://sitechinfos-default-rtdb.firebaseio.com",
        projectId: "sitechinfos",
        storageBucket: "sitechinfos.appspot.com",
        messagingSenderId: "371809873875",
        appId: "1:371809873875:web:6e918b3f1ec697e1fdc926"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
        
      var firebaseRef = firebase.database().ref().child('Login');
      
      firebaseRef.once("value").then(function(snapshot){
        var loginInfo=snapshot.val();
        document.getElementById("login").addEventListener("click",function(){
          var username = document.getElementById("username");
          var password = document.getElementById("pass");
          var msg = document.getElementById("msg");
          if (username.value==loginInfo.username && password.value==loginInfo.password)
            //location.replace("/home.html");
            msg.innerHTML = 'hola';
          });
      });