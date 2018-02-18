

 //// Put variables here:       
 var computerChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
 
 var wins= 0;
 var losses = 0;
 var guessesLeft = 10;
 var guessesFar = 0;

 //// I need to add a button to start the game:
 document.onkeyup = function(event) {
    var userGuess = event.key;
 }
/// add something here for the user to guess then what the computer guesses
 var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
 
 console.log(computerChoice)

 /// add a for loop










