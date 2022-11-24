var title = document.getElementById("title");
    var h1 = document.getElementById("h1");
    var sub = document.getElementById("sub");
    var price = document.getElementById("price");
    var auteur = document.getElementById("auteur");

    //share produit sur whatsapp
function partager (){
  var mess = "Salut j'ai trouvé ceci sur l'Application *Sitech Info*"
  var appLien = "https://sitechinfos.blogspot.com/p/sitechinfo.html"
  var share = encodeURI("*APPLACTION : Sitech Info*" +"\n\n"+ "_*"+mess+"*_" + "\n\n" +"*Sous-Titre:*" +" "+ "_"+sub.textContent+"_"  +'\n\n'+"*Prix :*" +" " +price.textContent +" "+"*Rc*"+'\n'+"*Auteur :*"+" "+auteur.innerText + "\n\n"+"Télécharger l'application"+"\n"+appLien);
  var url = "whatsapp://send?text="
  + share + "%0a"

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




