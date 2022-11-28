
var hom = document.getElementById('home');
var what = document.getElementById("whatsapp");
var main = document.getElementById("maind");



function openMenu(){
    var nav = document.getElementById("nav");
    nav.style.width = "250px";
    if(nav.style.width === "250px"){
        nav.style.left = "0px";
        nav.style.display = 'block';
    }
}

function closeMenu(){
    var nav = document.getElementById("nav");
    nav.style.width = "0px";
    if(nav.style.width === "0px"){
        nav.style.left = "-10px";
    }
    
}



//Boutton menue
function html(){
  var progress = document.getElementById('myProgress');
  var i = 0;
  progress.style.display = 'block';
if (i == 0) {
  i = 1;
  var elem = document.getElementById("myBar");
  var width = 0;
  var id = setInterval(frame, 0);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      
      i = 0;
      setTimeout(() => {
       window.location = "/pages/salle.html"
      }, 2000);
    }else {
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = width + "%";
      
    }
  }
}
}






  function mainD() {
  var nav = document.getElementById("nav");
  nav.style.width = "0px";
  if(nav.style.width === "0px"){
      nav.style.left = "-10px";
  }
}



function send_handle(){
    var nm = document.getElementById("name").value;
    var msg = document.getElementById("msg").value;
   
    var url = "https://wa.me/18094513048?text="
    + "Nom: " + nm + "%0a"
    + "Message: " + msg + "%0a"

window.open(url, '_blank').focus();
}

function closeform(){
  formulaire.style.display = "none";
  document.getElementById('home').style.display = 'block';
  html.style.display = 'block';
}


//----------------------boutton home-----------------//
function home(){
  var progress = document.getElementById('myProgress');
  var i = 0;
  progress.style.display = 'block';
if (i == 0) {
  i = 1;
  var elem = document.getElementById("myBar");
  var width = 0;
  var id = setInterval(frame, 0);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      
      i = 0;
      setTimeout(() => {
        //document.location.reload(true);
        progress.style.display = 'none';
        window.location ='/index.html';
      }, 2000);
    }else {
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = width + "%";
      
    }
  }
}
}

//Boutton rafraichir la page
function reload(){
    var progress = document.getElementById('myProgress');
    var i = 0;
    progress.style.display = 'block';
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 0);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        
        i = 0;
        setTimeout(() => {
          document.location.reload(true);
          progress.style.display = 'none';
        }, 2000);
      }else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
        
      }
    }
  }
  }

  //Boutton rafraichir la page
function boutique(){
  var progress = document.getElementById('myProgress');
  var i = 0;
  progress.style.display = 'block';
if (i == 0) {
  i = 1;
  var elem = document.getElementById("myBar");
  var width = 0;
  var id = setInterval(frame, 0);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      
      i = 0;
      setTimeout(() => {
        window.location = '/Boutique/boutique.html';
      }, 2000);
    }else {
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = width + "%";
      
    }
  }
}
}
var what =document.getElementById('whatsapp');
  //boutton open whatsapp
  function whatspp(){
    document.getElementById('whatsapp').style.height = "auto";
    if(what.style.height === "auto"){
        what.style.bottom = "0px";
        //what.style.display = 'block';
    }
    }
    //boutton open whatsapp
    function btnWhat(){
      document.getElementById('whatsapp').style.height = "0px";
        if(what.style.width === "0px"){
            what.style.left = "-10px";
        }
    }
