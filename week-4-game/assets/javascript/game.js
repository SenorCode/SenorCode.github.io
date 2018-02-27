var numberToMatch = null;
var wins = 0;
var losses = 0;
var score= null;
var tmp = 0;


var crystal_one = null;
var crystal_two = null;
var crystal_three = null;
var crystal_four = null;


var updateNumberToMatch = function() {
	numberToMatch = Math.floor(Math.random() * 120) + 19;
	document.querySelector("#random").innerHTML = numberToMatch;  
};

var updateScore = function() {
	
	var score = tmp;
	tmp
	document.querySelector("#score").innerHTML = score;
};

var updateCrystal_one = function() {
	crystal_one = Math.floor(Math.random() * 12) + 1;
	
};
var updateCrystal_two = function() {
	crystal_two = Math.floor(Math.random() * 12) + 1;
	
};

var updateCrystal_three = function() {
	crystal_three = Math.floor(Math.random() * 12) + 1;
	
};

var updateCrystal_four = function() {
	crystal_four = Math.floor(Math.random() * 12) + 1;
	
};
var reset = function() {
	updateNumberToMatch();
	updateScore();
	updateCrystal_one();
	updateCrystal_two();
	updateCrystal_three();
	updateCrystal_four();
};


//excecute on page load
updateNumberToMatch();
updateScore();
updateCrystal_one();
updateCrystal_two();
updateCrystal_three();
updateCrystal_four();
console.log(crystal_one);
$("#crystal_one").click(function(){

	score = crystal_one;
	updateScore();
	

});

$("#crystal_two").on("click", function(event){

});

$("#crystal_three").on("click", function(event){

});

$("#crystal_four").on("click", function(event){

});