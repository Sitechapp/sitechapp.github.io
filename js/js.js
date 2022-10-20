var vid = document.getElementById('videos');

function video (){
    window.location = vid;
}


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
var countDownDate = new Date("october 30, 2022 19:37:25").getTime();

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
    document.getElementById('timer').style.display = 'none';
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

  function reload(){
    setTimeout(() => {
      document.location.reload();
    }, 3000);
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



  var videoa = document.getElementById("a");
  var videob = document.getElementById("b");
  var videoc = document.getElementById("c");
  videob.style.display = "none";
function playVid() {
  
  elem.play();
  videoa.style.display = "none";
  videob.style.display = "block";
  videoc.style.display = "block";

  
}

function pauseVid() {
  elem.pause();
  videoa.style.display = "block";
  videob.style.display = "none";
  videoc.style.display = "block";

}