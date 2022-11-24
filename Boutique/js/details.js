
  //Envoyer message whatsapp comme partage
  //var postTitle = encodeURI("Programmation web en html et css\nFormation pour débutant en programmation web\n\nDans cette formation ,je t'apprends:\n\nLa base de la prommation web?\nComment créer votre premier page web?\nComment héberger gratuitement?\n\n");
 function partager(){
    var title = document.getElementById("title");
    var sub = document.getElementById("sub");
    var prix = document.getElementById("prix");
    var auteur = document.getElementById("auteur");
   
    var url = "https://wa.me/18094513048?text="
    + "*Title*: " + title.innerText + "%0a"
    + "*Sous-Title*: " + sub.innerText + "%0a"
    + "*Prix*: " + prix.innerText + "%0a"
    + "Auteur: " + auteur.innerText + "%0a"

window.open(url, '_blank').focus();
}


function closeform(){
  document.getElementById('forma').style.display = "none";
  document.getElementById('detail').style.display = 'block';
}

function telecharger(){
  document.getElementById('forma').style.display = 'block';
  document.getElementById('detail').style.display = 'none';
}




