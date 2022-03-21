alert('Ruban Joseph');
const scriptURL = 'https://script.google.com/macros/s/AKfycby0663OeuYdnz3d5XlU-A25CmqsZy9YZ_cIEt6WALeSC2Pv6JiefDQDia2TO193znOP/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => document.getElementById('message').innerHTML ='bonjour')
    .catch(error => console.error('Error!', error.message))
})