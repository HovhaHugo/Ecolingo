fetch("./questions.json").then((response) => response.json()).then((json) => initQuestions(json));

var life = 3;
var questions = [];
var numQuestion = 0;

function initQuestions(json){
    questions = json.data;
    loadQuestion(questions[numQuestion]);
}

const shuffle = (array) => { 
    return array.sort(() => Math.random() - 0.5); 
}; 

function loadQuestion(question){
    numQuestion++;
    if (numQuestion >= 10){
        numQuestion = 10;
    }
    document.getElementById("question").textContent = question.Question
    listRep = shuffle(["repA","repB","repC","repD"])

    document.getElementById(listRep[0]).textContent = question.A_true
    document.getElementById(listRep[0]).parentElement.parentElement.parentElement.classList += "reponse";
    document.getElementById(listRep[1]).textContent = question.B
    document.getElementById(listRep[2]).textContent = question.C
    document.getElementById(listRep[3]).textContent = question.D
}

function bonneReponse(){
    updateProgressbar(1);
    // Ajouter explication
    loadQuestion(questions[numQuestion]);
}

function mauvaiseReponse(){
    updateProgressbar(0);
    // Ajouter explication
    loadQuestion(questions[numQuestion]);
}

function clickEvents(){
    buttons = document.getElementsByClassName("bouton-choix");
    for(button in buttons){
        if(button.classList.contains("reponse")){
            button.onclick = bonneReponse();
        }
        else{
            button.onclick = mauvaiseReponse();
        }
    }
    console.log("Hey");
}

function updateProgressbar(value) {
    if(value == 1) {
        progressbarvalue += 10;
        if (progressbarvalue > 100){
            progressbarvalue = 100
        }
        progressbar.style.width = `${progressbarvalue}%`;
        progressbar.style.color = `#6BD844`;
    }
    else if(value == 0) {
        progressbarvalue -= 10;
        if (progressbarvalue < 0){
            progressbarvalue = 0
        }
        progressbar.style.color = `#D84444`;
        updateLife();
    }
}

function updateLife() {
switch(life) {
    case 3:
        document.getElementById("lp3").src = "./img/perroquet_only_dead.svg";
        life--;
    break;
    case 2:
        document.getElementById("lp2").src = "./img/perroquet_only_dead.svg";
        life--;
    break;
    case 1:
        document.getElementById("lp1").src = "./img/perroquet_only_dead.svg";
        life--;
    break;
    case 0:
        alert("Vous avez perdu !");
        // Ajouter redirect
    break;
}
}