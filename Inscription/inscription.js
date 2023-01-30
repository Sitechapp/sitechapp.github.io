var emailV, nameV, phoneV, UrlV, sexeV, dateV, imagesV;

function readFom() {
  emailV = document.getElementById("email").value;
  nameV = document.getElementById("name").value;
  phoneV = document.getElementById("phone").value;
  nV = document.getElementById("Niv").value;
  dateV = document.getElementById("date").value;
  sexeV = document.getElementById("sexe").value;
  adressV = document.getElementById("image").value;
  refV = document.getElementById("Ref").value;
  Nmref = document.getElementById("ER").value;
  msg = document.getElementById("msg");
  console.log(emailV, nameV, phoneV, nV, sexeV, dateV, adressV, refV);
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzYglbFFmreDw7gp2U16iRyvrjjyJmRCh3Cu7-xl9dx5zvPfH8byTlAH6dODsp63gva/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => document.getElementById('myForm').style.display = "none")
    .then(response => document.getElementById('msg').style.display = "block")
    .then(response => window.location = document.getElementById('lien'))
    .then(response => document.getElementById('name').value = '')
    .then(response => document.getElementById('email').value = '')
    .then(response => document.getElementById('phone').value = '')
    .catch(error => console.error('Error!', error.message))
});

var refV = document.getElementById("Ref");

document.getElementById("reference").style.display = "none";
function select(){
  readFom();
  if(refV == "ED"){
    document.getElementById("reference").style.display = "block";
  }else{
    document.getElementById("reference").style.display = "none";
  }

}