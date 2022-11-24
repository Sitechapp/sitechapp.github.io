function openMenu(){
  var nav = document.getElementById("nav");
  nav.style.width = "250px";
  if(nav.style.width === "250px"){
      nav.style.left = "0px";
      nav.style.display = 'block';
  }
}

function main(){
  var nav = document.getElementById("nav");
  nav.style.width = "0px";
  if(nav.style.width === "0px"){
      nav.style.left = "-10px";
  }
  
}


