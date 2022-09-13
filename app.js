// Game Values
let min = 1;
let	max = 10;	
let winningNum = getRandonNum(min, max); 			
let guessLeft = 3;
		
// UI Elements
const game = document.querySelector('#game'),
			minNum = document.querySelector('.min-num'),
			maxNum = document.querySelector('.max-num'),
			guessBtn = document.querySelector('#guess-btn'),
			guessInput = document.querySelector('#guess-input'),
			message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;		

// Play again event listener
game.addEventListener('mousedown', function(e){
	if(e.target.className === 'play-again'){
		window.location.reload();
	}
}) 

// Listen for Guess
guessBtn.addEventListener('click', function(){
	let guess = parseInt(guessInput.value);

// Validate 
	if( isNaN(guess) || guess < min || guess > max){
		setMessage(`Por favor digite um número entre ${min} e ${max}`, 'red') 
	}

// Check if Won
	if(guess === winningNum){

		gameOver(true, `O número ${winningNum} é o correto. VOCÊ VENCEU!!!`)

	} else{
		// Wrong number
		guessLeft -= 1 ;

	if(guessLeft === 0){
			// Game Over - VOCÊ PERDEU!!!
			
			gameOver(false, `[Game Over] Você Perdeu. O número correto era: ${winningNum}.`)
			
		} else{
			// Game continues - Answer wron
			setMessage(`Não é o número ${guess}. Chances restantes(${guessLeft})`, 'red');

			// Change border color
			guessInput.style.borderColor = 'red';

			// Clear Input
			guessInput.value = ''; 
		}
	}
});

// Game Over
function gameOver(won, msg){
	let color;
	won === true ? color = 'green' : color = 'red';

		 		// Disable input
				 guessInput.disabled = true;
				 // Change border color
				 guessInput.style.borderColor = color;
				 // Set text color
				 message.style.color = color;
				 // Set message
				 setMessage(msg);

// Play Again??
guessBtn.value = 'Jogar de novo';
guessBtn.className += 'play-again';
}

//Get Winning Number
function getRandonNum(min, max){
		 return Math.floor(Math.random()*(max-min+1)+ min);

}

// Set Message
function setMessage(msg, color){
	message.style.color = color;
	message.textContent = msg;
}
