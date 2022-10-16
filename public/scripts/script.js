function signupm(){
  var nav = document.getElementById("nav");
  nav.style.width = "0px";
  if(nav.style.width === "250px"){
    document.getElementById("modal2").style.display = 'none';
    document.getElementById("modal1").style.display = 'block';
    nav.style.left = "-10px";
  }
}

function loginm(){
  var nav = document.getElementById("nav");
  document.getElementById("modal2").style.display = 'block';
  document.getElementById("modal1").style.display = 'none';
  nav.style.width = "0px";
  if(nav.style.width === "250px"){
    nav.style.left = "-10px";
  }
}

function edit(){
    document.getElementById("modal3").style.display = 'block';
    document.getElementById("modal1").style.display = 'none';
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


//a ne pas toucher pour le moment, coming soon

window.addEventListener("online", function() {
    alert("You are online now!");
  });
  
  window.addEventListener("offline", function() {
    alert("Oops! You are offline now!");
  });

  if (navigator.onLine) {
    console.log("You are online");
  } else {
    console.log("You are offline");
  }



  //slide de la page d'acueill
  let span = document.getElementsByTagName('span');
	let product = document.getElementsByClassName('product')
	let product_page = Math.ceil(product.length/4);
	let l = 0;
	let movePer = 25.34;
	let maxMove = 203;
	// mobile_view	
	let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches)
	 {
	 	movePer = 106;
	 	maxMove = 200;
	 }

	let right_mover = ()=>{
		l = l - movePer;
		if (product == 1){l = 0; }
		for(const i of product)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of product){
			if (product_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}
	span[1].onclick = ()=>{right_mover();}
	span[0].onclick = ()=>{left_mover();}



function achat(){
   var showmw = document.getElementById('h');
   var price = document.getElementById('b').value;
   
}




// Set the date we're counting down to
var countDownDate = new Date("october 16, 2022 19:37:25").getTime();

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