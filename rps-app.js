

// An array to store the 3 choices for the computer
var compChoices = ["r", "p", "s"];

var wins = 0;
var loses = 0;
var ties = 0;

var numPlays = prompt("How many times would you like to play?");

// Loop to play 10 rounds
for (var i = 0; i < numPlays; i++) {
    
    // Storing the computer guess after randomly picking r, p, or s from the choices array
    var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];

    // Storing the user's guess and converting to lowercase if they type uppercase letters
    var userGuess = prompt("Enter r, p, or s to play!");
    userGuess = userGuess.toLowerCase();

    // The game logic built around the known set of rules for each selected choice
    if (userGuess === "r" || userGuess === "p" || userGuess === "s") {
        alert("The computer chose " + compGuess);

        if ((userGuess === "r" && compGuess === "s") || 
        (userGuess === "p" && compGuess === "r") || 
        (userGuess === "s" && compGuess === "p")) {
            wins++;
            alert("You've won " + wins + " time(s)!");
        } else if (userGuess === compGuess) {
            ties++;
            alert("You've tied " + ties + " time(s)!");
        } else {
            loses++;
            alert("You've lost " + loses + " time(s)!");
        }
    }
}

// When the loop is complete, output the 3 different totals to see who won
alert("Total wins: " + wins + "\nTotal ties: " + ties + "\nTotal loses: " + loses);
