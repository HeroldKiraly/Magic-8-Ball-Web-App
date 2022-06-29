const possibleAnswers = [/*Positive*/ 'It is certain.', 'It is decidedly so.', 'Without a doubt.', 'Yes definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to a yes.', /*Neutral*/ 'Reply hazy, try again.', 'Ask again later.', 'Better not tell you now', 'Cannot predict now.', 'Concentrate and ask again.', /*Negative*/ 'Dont count on it.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];

//GAME GLOBAL VARIABLES

let randomDecider = Math.floor(Math.random() * 20);
var document;
//BUTTON VARIABLE
let buttonClick = document.getElementById("button").onclick = answerOnButtonPress;

function answerOnButtonPress() {
    //FUNCTION VARIABLES
    let gameInput = document.getElementById('game-input');
    let gameOutput = document.getElementById('data-game-output');
    let getGameOutput = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
    var userCurrentInput;
    
    if (gameInput.value == false) {
        gameOutput.innerHTML = 'Please write something as an input';
        userCurrentInput = gameInput.value;
    } else if (userCurrentInput === gameInput.value) {
        gameOutput.innerHTML = 'Please ask something else';
    } else if(gameInput.value != false && userCurrentInput == null) {
        gameOutput.innerHTML = getGameOutput;
        userCurrentInput = gameInput.value;
    }
}
buttonClick;

console.log(userCurrentInput);


dataLog();
console.log(getGameOutput);
