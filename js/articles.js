var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c');
var d = document.getElementById('d');
var e = document.getElementById('e');
var qiz = document.getElementById('qiz');

document.getElementById('aa').addEventListener("click", ab);
document.getElementById('bb').addEventListener("click", bc);
document.getElementById('cc').addEventListener("click", cd);
document.getElementById('dd').addEventListener("click", de);
document.getElementById('ee').addEventListener("click", eqiz);

function ab(){
    a.style.display ='none';
    b.style.display = 'block';
    c.style.display = 'none';
    d.style.display = 'none';
    e.style.display = 'none';
}

function bc(){
    a.style.display ='none';
    b.style.display = 'none';
    c.style.display = 'block';
    d.style.display = 'none';
    e.style.display = 'none';
}
function cd(){
    a.style.display ='none';
    b.style.display = 'none';
    c.style.display = 'none';
    d.style.display = 'block';
    e.style.display = 'none';
}
function de(){
    a.style.display ='none';
    b.style.display = 'none';
    c.style.display = 'none';
    d.style.display = 'none';
    e.style.display = 'block';
}
function eqiz(){
    window.location = '/question/htmlcss/qiz.html'
}