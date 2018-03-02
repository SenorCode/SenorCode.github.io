var letters = [
		"A","B","C", "D", "E","F","G",
		"H", "I", "J", "K", "L","M","N",
		"O","P","Q", "R", "S", "T", "U",
		"V", "W", "X", "Y", "Z"];

var lettersGuessed = [];
var letterToGuess  = null;
var guessesLeft    = 9;
var wins           = 0;
var losses         = 0;

var updateGuessesLeft = function() {
	document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

var updateLetterToGuess = function() {
	letterToGuess =letters[Math.floor(Math.random()*letters.length)]
	console.log(letterToGuess);
};

var updateGuessesSoFar = function() {
	document.querySelector("#guess-list").innerHTML = lettersGuessed.join(" , ");

};

var reset = function() {
	guessesLeft    = 9
	lettersGuessed = [];
	updateGuessesLeft();
	updateGuessesSoFar();
	updateLetterToGuess();
};


updateLetterToGuess();
updateGuessesLeft();

document.onkeyup = function(event){
	guessesLeft--;
	var letter = String.fromCharCode(event.which).toUpperCase();
	lettersGuessed.push(letter);

	updateGuessesLeft();
	updateGuessesSoFar();

	if (letter === letterToGuess) {
		wins++;
		document.querySelector("#wins").innerHTML = wins;
		reset();
	}
	if (guessesLeft === 0) {
		losses++;
		document.querySelector("#losses").innerHTML = losses;
		alert("You Lose!");
		reset();
	}
}