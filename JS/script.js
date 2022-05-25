const possibleAnswers = [/*Positive*/ 'It is certain.', 'It is decidedly so.', 'Without a doubt.', 'Yes definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to a yes.', /*Neutral*/ 'Reply hazy, try again.', 'Ask again later.', 'Better not tell you now', 'Cannot predict now.', 'Concentrate and ask again.', /*Negative*/ 'Dont count on it.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];

let getGameOutput = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];

let randomDecider = Math.floor(Math.random() * 20);


function dataLog() {
    console.log(possibleAnswers.length);
    console.log(randomDecider);
}

document.getElementById('data-game-output').innerHTML = getGameOutput;

dataLog();
console.log(getGameOutput);




/*
● It is certain.
● It is decidedly so.
● Without a doubt.
● Yes definitely.
● You may rely on it.

● As I see it, yes.
● Most likely.
● Outlook good.
● Yes.
● Signs point to yes.

● Reply hazy, try again.
● Ask again later.
● Better not tell you now.
● Cannot predict now.
● Concentrate and ask again.

● Don't count on it.
● My reply is no.
● My sources say no.
● Outlook not so good.
● Very doubtful.
*/