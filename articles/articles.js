
    //document.getElementById("list").style.display = "none";
    var l = document.getElementById("list");
    var spanv = document.getElementById("spanv");

function listOpen(){
   if(l.style.display === "none"){
    l.style.display = 'block';
    spanv.innerHTML = 'X'
    
   }else if(l.style.display = 'block'){
    l.style.display ="none";
    spanv.innerHTML = 'v'
   }
     
}

function openf(){
    document.getElementById("formulaire").style.display = "block";
    document.getElementById("message").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("openForm").style.display = "none";
}

function closef(){
    document.getElementById("formulaire").style.display = "none";
    document.getElementById("message").style.display = "none";
    document.getElementById("home").style.display = "block";
    document.getElementById("openForm").style.display = "block";
}