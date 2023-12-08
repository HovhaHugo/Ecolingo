fetch("http://localhost:3000/api/questions").then((response) => response.json()).then((json) => loadtext(json));

var life = 3;

const shuffle = (array) => { 
    return array.sort(() => Math.random() - 0.5); 
}; 

function loadtext(question){
    question = data.question[0]
    document.getElementById("question").textContent = question.Question
    listRep = shuffle(["repA","repB","repC","repD"])

    document.getElementById(listRep[0]).textContent = question.A_true
    document.getElementById(listRep[1]).textContent = question.B
    document.getElementById(listRep[2]).textContent = question.C
    document.getElementById(listRep[3]).textContent = question.D
    //console.log(question)
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