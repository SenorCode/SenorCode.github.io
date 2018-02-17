var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		var appguess = 	letters[Math.floor(Math.random()*letters.length)];
		console.log(appguess);	
		var guessCount = 9;
		var wins = 0;
		var guess_area = document.getElementById("guess_area");
		document.onkeyup = function(event) {
        console.log(event);
        guess_area.textContent = event.key;
        
      	};
		
		

		function guess() {
			for (var i = 0; i < 9; i++) {
				if ((document.onkeyup) === appguess) {
        			 wins++;
        			 var wins = document.getElementById("wins");
        			 wins.textContent = wins;
        		}	
        		
        		
        	} //for loop
		} //function
		