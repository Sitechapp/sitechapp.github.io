var hom = document.getElementById('home');
var videos = document.getElementById('video');
var what = document.getElementById("whatsapp");
var t = document.getElementById("telecharger");
var formulaire = document.getElementById("formulaire");
var cours = document.getElementById("cours");
var crs = document.getElementById("coursdetails");
var html = document.getElementById("htmlcss");
var btnforma = document.getElementById("forma");



crs.style.display = 'none';
//btnforma.style.display = 'none';


  //boutton fromation
function formation(){
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
          window.location = 'https://chat.whatsapp.com/IjKueHjJJ0cBYPLYzMMYPl';
        }, 2000);
      }else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
        
      }
    }
  }
  }



    //boutton telecharger formation par module
function telecharger(){
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
            window.location = 'login.html';
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

   
  var vid = document.getElementById('videos');

    function video (){
        window.location = vid;
    }

  //boutton open whatsapp
    function whatspp(){
    what.style.height = "auto";
    if(what.style.height === "auto"){
        what.style.bottom = "0px";
        //what.style.display = 'block';
    }
    }
    //boutton open whatsapp
    function btnWhat(){
    what.style.height = "0px";
        if(what.style.width === "0px"){
            what.style.left = "-10px";
        }
    }