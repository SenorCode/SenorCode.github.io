$(document).ready(function() {

	var numberToMatch = null;
	var wins = 0;
	var losses = 0;
	var score= 0;

	var crystal_one = null;
	var crystal_two = null;
	var crystal_three = null;
	var crystal_four = null;


	var updateNumberToMatch = function() {
		numberToMatch = Math.floor(Math.random() * 101) + 19;
		document.querySelector("#random").innerHTML = numberToMatch;  
	};

	var updateScore = function() {
		document.querySelector("#score").innerHTML = score;
		
	};


	var updateCrystal_one = function() {
		crystal_one = Math.floor(Math.random() * 11) + 1;
		
	};
	var updateCrystal_two = function() {
		crystal_two = Math.floor(Math.random() * 11) + 1;
		
	};

	var updateCrystal_three = function() {
		crystal_three = Math.floor(Math.random() * 11) + 1;
		
	};

	var updateCrystal_four = function() {
		crystal_four = Math.floor(Math.random() * 11) + 1;
		
	};

	var reset = function() {
		updateNumberToMatch();
		score = 0;
		$("#score").text(score);
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


	$("#crystal_one").click(function(){

		score = score + crystal_one;

		updateScore();

		if(score == numberToMatch){
			alert("You Won!");
			wins++;
			$("#wins").text(wins);
			reset();
		}
		else if(score > numberToMatch){
				alert("You Lose!");
				losses++;
				$("#losses").text(losses);
				reset();
		}

	});

	$("#crystal_two").click(function(){

		score = score + crystal_two;

		updateScore();
		
		if(score == numberToMatch){
			alert("You Won!");
			wins++;
			$("#wins").text(wins);
			reset();
		}
		else if(score > numberToMatch){
				alert("You Lose!");
				losses++;
				$("#losses").text(losses);
				reset();
		}

	});

	$("#crystal_three").click(function(){

		score = score + crystal_three;

		updateScore();
		
		if(score == numberToMatch){
			alert("You Won!");
			wins++;
			$("#wins").text(wins);
			reset();
		}
		else if(score > numberToMatch){
				alert("You Lose!");
				losses++;
				$("#losses").text(losses);
				reset();
		}

	});

	$("#crystal_four").click(function(){

		score = score + crystal_four;

		updateScore();
		
		if(score == numberToMatch){
			alert("You Won!");
			wins++;
			$("#wins").text(wins);
			reset();
		}
		else if(score > numberToMatch){
				alert("You Lose!");
				losses++;
				$("#losses").text(losses);
				reset();
		}

	});
});