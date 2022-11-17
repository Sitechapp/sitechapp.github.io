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




// Set the date we're counting down to
var countDownDate = new Date("november 20, 2022 19:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  var d =document.getElementById("day");
  var he =document.getElementById("heure");
  var m =document.getElementById("minutes");
  var s =document.getElementById("second");
  
    d.innerHTML = days;
    he.innerHTML = hours;
    m.innerHTML = minutes;
    s.innerHTML = seconds;
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Il n'y plus de formatiion";
    fa.innerHTML = "Clicquer sur boutton pour Intégrer";
    document.getElementById('timer').style.display = 'none';
    btnforma.style.display = 'block';
  
   
  }else{
    fa.innerHTML = "Le groupe sera disponible tréès bientot";
    
  }
}, 1000);



function chargebattery() {
    var a;
    a = document.getElementById("div1");
    a.innerHTML = "&#xf244;";
    setTimeout(function () {
        a.innerHTML = "&#xf243;";
      }, 1000);
    setTimeout(function () {
        a.innerHTML = "&#xf242;";
      }, 2000);
    setTimeout(function () {
        a.innerHTML = "&#xf241;";
      }, 3000);
    setTimeout(function () {
        a.innerHTML = "&#xf240;";
      }, 4000);
  }
  chargebattery();
  setInterval(chargebattery, 5000);

  

  

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

// var phone =document.getElementById('phone').value;
var code =document.getElementById('code').value;
const scriptURL = 'https://script.google.com/macros/s/AKfycbw1zvGP8B33Q2dWFqN9l8ljFgipbwu2H3utyK3iFNGNslUkRNstDll_oH30-3wZ1_dx/exec'
const form = document.forms['google-sheet']
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => document.getElementById('formulaire').style.display = "none")
    //.then(response => window.location = document.getElementById('telecharger'))
    .then(response => document.getElementById('name').value = '')
    .then(response => document.getElementById('email').value = '')
    .then(response => document.getElementById('phone').value = '')
    .catch(error => console.error('Error!', error.message))
}); //


