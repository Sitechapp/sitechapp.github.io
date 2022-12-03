//Question bank
var questionBank= [
    {
        question : 'Le premier dossier que vous avez creer est :',
        option : ['Un sous-dossier','Le dossier principale','Le dossier page','Aucune de ses reponses'],
        answer : 'Le dossier principale'
    },
    {
        question : 'Pour programmer vous avez besoin un',
        option : ['Navigateur','clavier','Editeur de texte','Aucune de ses reponses'],
        answer : 'Editeur de texte'
    },
    {
        question : 'Le but d’un navigateur est :',
        option : ['De structure le html','De compiler le css','De visualiser la page web','Aucune de ses reponses'],
        answer : 'De visualiser la page web'
    },
    {
        question : 'Doctype  signifit',
        option : ['Document','Entete de la page','Type de html','Type de document'],
        answer : 'Type de document'
    },
    {
        question : 'Html se definit comme :',
        option : ['iper text language','hyper text makup language','Hyper Text Markup Language','hypert text marckup'],
        answer : 'Hyper Text Markup Language'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var note= document.getElementById('notes');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;
var notes= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        notes = notes+20;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        note.innerHTML= notes+ '/'+ "100";
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();