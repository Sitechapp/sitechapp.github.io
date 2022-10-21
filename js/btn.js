var hom = document.getElementById('home');
var videos = document.getElementById('video');
var what = document.getElementById("whatsapp");
var t = document.getElementById("telecharger");
var formulaire = document.getElementById("formulaire");

//boutton home
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
          document.location.reload(true);
          progress.style.display = 'none';
          hom.style.display = 'block';
            videos.style.display = 'none';
            what.style.display = 'none';
        }, 2000);
      }else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
        
      }
    }
  }
  }


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
          progress.style.display = 'none';
          hom.style.display = 'none';
            videos.style.display = 'block';
            what.style.display = 'none';
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
          hom.style.display = 'none';
            videos.style.display = 'block';
            what.style.display = 'none';
            formulaire.style.display= 'block';
            //window.location = t;
            t.innerHTML =`<h1>Vous avez télécharger le document</h1>`
        }, 2000);
      }else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
        
      }
    }
  }
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


    function send_handle(){
        var nm = document.getElementById("name").value;
        var msg = document.getElementById("msg").value;
       
        var url = "https://wa.me/18094513048?text="
        + "Nom: " + nm + "%0a"
        + "Message: " + msg + "%0a"

    window.open(url, '_blank').focus();
    }

    



