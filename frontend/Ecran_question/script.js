fetch("http://localhost:3000/api/question").then((response) => response.json()).then((json) => loadtext(json));

const shuffle = (array) => { 
    return array.sort(() => Math.random() - 0.5); 
}; 

function loadtext(question){
    document.getElementById("question").textContent = question.Question
    listRep = shuffle(["repA","repB","repC","repD"])
       
    document.getElementById(listRep[0]).textContent = question.A_true
    document.getElementById(listRep[0]).onclick = function()
    {
        alert('Bonne réponse !');
    }
    document.getElementById(listRep[1]).textContent = question.B
    document.getElementById(listRep[2]).textContent = question.C
    document.getElementById(listRep[3]).textContent = question.D
    //console.log(question)
}