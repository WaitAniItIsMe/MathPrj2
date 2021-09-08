var player_1 = localStorage.getItem("PlayerOne:");
var player_2 = localStorage.getItem("PlayerTwo:");

document.getElementById("playerOneName").innerHTML = player_1;
document.getElementById("playerTwoName").innerHTML = player_2;

var player_1_Score = 0 ;
var player_2_Score = 0 ;

document.getElementById("playerOneScore").innerHTML = " : " + player_1_Score;
document.getElementById("playerTwoScore").innerHTML = " : " + player_2_Score;

document.getElementById("OGplayerQuestion").innerHTML = "Question turn: " + player_1;
document.getElementById("playerAnswer").innerHTML = "Answer turn: " + player_2;

function send(){
    getNumber1 = document.getElementById("MainAnswer1").value;
    getNumber2 = document.getElementById("MainAnswer2").value;
    
    question = "<h4 id='mainQuestion'> Ques = " + getNumber1 + " x " + getNumber2 +"</h4>";
    input = "<br> <input type = 'text' id='inputAns' placeholder='what do u think is the Answer?'>" ;
    checkButton = "<br> <button class = 'btn btn-info' onclick = 'check()'> Check Ans </button>";
    row = question + input + checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("Answer").value = "";

}
