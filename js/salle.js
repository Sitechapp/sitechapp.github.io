const firebaseConfig = {
    apiKey: "AIzaSyCvqf6mNg-FsbcU7vZf52xEi6Skp9tz3yU",
    authDomain: "signup-286f7.firebaseapp.com",
    databaseURL: "https://signup-286f7-default-rtdb.firebaseio.com",
    projectId: "signup-286f7",
    storageBucket: "signup-286f7.appspot.com",
    messagingSenderId: "579225916993",
    appId: "1:579225916993:web:f4f70c8c24584a770018c0",
    measurementId: "G-RH5HF2F7DN"
  };

  firebase.initializeApp(firebaseConfig);

    const auth = firebase.auth();
    const fs = firebase.firestore();

    firebase.auth().onAuthStateChanged((user) => {
    var user = firebase.auth().currentUser;
    var log =document.getElementById('log');
    var rc =document.getElementById('rc').value;
    var elem = document.getElementById("myBar2");
    var lva = document.getElementById("lva");
    if (user) {
    // User is signed in, see docs for a list of available properties
    //https://firebase.google.com/docs/reference/js/firebase.User

    var uid = user.uid;
    fs.collection('users').doc(user.uid).get().then((snapshot) => {
    console.log(snapshot.data().Name);
    console.log(snapshot.data().Rcoins);
    username.innerText = snapshot.data().Name;
    document.getElementById('rc').value = snapshot.data().Rcoins;
    elem.innertext = snapshot.data().Rcoins;
    var bv = document.getElementById('bv');
var a = document.getElementById('lvA');
var b = document.getElementById('lvB');
var c = document.getElementById('lvC');
var d = document.getElementById('lvD');
var e = document.getElementById('lvE');
var lva = document.getElementById('lva');
var qiz = document.getElementById('qiz');
var bar =document.getElementById('myBar3');
var e = document.getElementById('e');
    lva.style.display = 'block';
    var progress = document.getElementById('myProgress2');;
        progress.style.display = 'block';
        
        var b = 0;
          if ( document.getElementById('rc').value === "1") {
                e.textContent = '20%';
                bar.style.width = '20%';
                //a.style.display= 'block';
               // bv.style.display = 'none';
            }else if(document.getElementById('rc').value == "2"){
                e.textContent = '40%';
                bar.style.width = '40%';
                //document.getElementById('lvB').style.display= 'block';
                //bv.style.display = 'none';
            }else if(document.getElementById('rc').value == "3"){
                e.textContent = '60%';
                bar.style.width = '60%';
                //c .style.display = 'block';
                //bv.style.display = 'none';
            }else if(document.getElementById('rc').value == "4"){
                e.textContent = '80%';
                elem.textContent = '80%';
                bar.style.width = '80%';
                //d.style.display = 'block';
                //bv.style.display = 'none';
            }else if(document.getElementById('rc').value == "5"){
                e.textContent = '100%';
                bar.style.width = '100%';
                //document.getElementById('lvE').style.display = 'block';
                //bv.style.display = 'none';
            }


            
            document.getElementById("lva").addEventListener("click", bien);
            function bien() {
                if ( document.getElementById('rc').value <= 1) {
                a.style.display= 'block';
                bv.style.display = 'none';
                }else if(document.getElementById('rc').value == "2"){
                    document.getElementById('lvB').style.display= 'block';
                    bv.style.display = 'none';
                }else if(document.getElementById('rc').value == "3"){
                    c.style.display = 'block';
                    bv.style.display = 'none';
                }else if(document.getElementById('rc').value == "4"){
                    d.style.display = 'block';
                    bv.style.display = 'none';
                }else if(document.getElementById('rc').value == "5"){
                    document.getElementById('lvE').style.display = 'block';
                    bv.style.display = 'none';
                }
            }
           

            document.getElementById("lvb").addEventListener("click", myFunction);
            function myFunction() {
                var level = 1;
                var l = 1+ 1;
                //document.location.reload(true);
                fs.collection('users').doc(user.uid).update({
                  Rcoins : l
                  
    }).then(() => {
        document.getElementById('lvB').style.display= 'block';
                    a.style.display = 'none';
        });
   
    
}



document.getElementById("lvc").addEventListener("click", lvc);
            function lvc() {
                var level = 2;
                var l = level+ 1;
                fs.collection('users').doc(user.uid).update({
                  Rcoins : l
    }).then(() => {
        document.getElementById('lvC').style.display= 'block';
        document.getElementById('lvB').style.display= 'none';
        });
   
    
}

document.getElementById("lvd").addEventListener("click", lvd);
            function lvd() {
                var lv = document.getElementById('rc').value;
                var level = 3;
                var l = level + 1;
                lv.innerHtml = l;
                //document.location.reload(true);
                fs.collection('users').doc(user.uid).update({
                  Rcoins : l
    }).then(() => {
        document.getElementById('lvD').style.display= 'block';
        document.getElementById('lvC').style.display= 'none';
        });
   
    
}

document.getElementById("lve").addEventListener("click", lve);
            function lve() {
                var lv = document.getElementById('rc').value;
                var level = 4;
                var l = level + 1;
                lv.innerHtml = l;
                location.reload();
                fs.collection('users').doc(user.uid).update({
                  Rcoins : l
    }).then(() => {
        document.getElementById('lvE').style.display= 'block';
        document.getElementById('lvE').style.display= 'none';
        });
   
    
}



    })
    } else {
    // User is signed out
    localStorage.setItem('username', user)
    console.log('user is not signed in to retrive username');
    document.getElementById('lva').style.display = 'none';
    }
    });

  