var fa = document.getElementById('FA');
var btnf = document.getElementById('btnformation');

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

function main(){
  var nav = document.getElementById("nav");
  nav.style.width = "0px";
  if(nav.style.width === "0px"){
      nav.style.left = "-10px";
  }
  
}


//  pour la page video de  l'application
let videoList = document.querySelectorAll('.video-list-container .list');

videoList.forEach(vid =>{
   vid.onclick = () =>{
      videoList.forEach(remove =>{remove.classList.remove('active')});
      vid.classList.add('active');
      let src = vid.querySelector('.list-video').src;
      let title = vid.querySelector('.list-title').innerHTML;
      document.querySelector('.main-video-container .main-video').src = src;
      document.querySelector('.main-video-container .main-video').play();
      document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
   };
});



  

  function back(){
    history.go(-1);
  }

 



var elem = document.getElementById("myvideo");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* var phone =document.getElementById('phone').value;
var code =document.getElementById('code').value;
const scriptURL = 'https://script.google.com/macros/s/AKfycbw1zvGP8B33Q2dWFqN9l8ljFgipbwu2H3utyK3iFNGNslUkRNstDll_oH30-3wZ1_dx/exec'
const form = document.forms['google-sheet']
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => document.getElementById('formulaire').style.display = "block")
    //.then(response => window.location = document.getElementById('telecharger'))
    .then(response => document.getElementById('name').value = '')
    .then(response => document.getElementById('email').value = '')
    .then(response => document.getElementById('phone').value = '')
    .catch(error => console.error('Error!', error.message))
}); */



    //boutton cours html et css
    function htmlcss(){
      var htmlp = document.getElementById('progressLogin');
      var i = 0;
      htmlp.style.display = 'block';
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBar2");
      var width = 0;
      var id = setInterval(frame, 0);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          
          i = 0;
          setTimeout(() => {
            //document.location.reload(true);
            window.location = "/Videos/htmlcss/htmlCss.html";
          }, 2000);
        }else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width + "%";
          
        }
      }
    }
    }


   
    function closemessage(){
      document.getElementById('item').style.display = 'none';
     }

   /*  function ca(){
      var htmlp = document.getElementById('progressLogin');
      var i = 0;
      htmlp.style.display = 'block';
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBar2");
      var width = 0;
      var id = setInterval(frame, 0);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          
          i = 0;
          setTimeout(() => {
            //document.location.reload(true);
            window.location = "/coursAndroid/coursAndroid.html";
          }, 2000);
        }else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width + "%";
          
        }
      }
    }
     }*/
    
     function closemessage(){
      document.getElementById('item').style.display = 'none';
     }

 function pasDisponible(){
  document.getElementById('item').style.display = 'block';
  document.getElementById('cardMessage').textContent ='Pas encore disponible pour le moment';
 }






