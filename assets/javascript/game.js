

 //// Put variables here:       
 var computerChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
 var wins= 0;
 var losses = 0;
 var guessesLeft = 10;
 var guessesFar = 0;
 

 //// I need to add a button to start the game:
 document.onkeyup = function(event) {
    
//// add a key for user to use and computer
var userGuess = String.fromCharCode(event.keyCode);
var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
guessesFar.push(userGuess);


/// if statements need to be added:

if (userGuess == computerChoice) {
wins++;

guessesLeft= 10;
guessesFar.length = 0;
}

else if (guessesLeft == 0){
    losses++;

    guessesLeft=10;
    guessesFar.length = 0;
}
else if (userGuess !== computerChoice){
    guessesLeft--;
}

var html =
"<p>You chose: " + userGuess + "</p>" +
"<p>The computer chose: " + computerGuess + "</p>" +
"<p>wins: " + wins + "</p>" +
"<p>losses: " + losses + "</p>" +
"<p>guessesLeft: " +  + "</p>";


    document.querySelector('#game').innerHTML = html;
}

