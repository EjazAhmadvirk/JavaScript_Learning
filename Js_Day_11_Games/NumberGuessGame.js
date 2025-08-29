// Random Number Guessing Game in JavaScript

function guessGame() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // number between 1-100
    let attempts = 0;
    let guess;
  
    while (true) {
      guess = parseInt(prompt("Guess a number between 1 and 100:"));
      attempts++;
  
      if (isNaN(guess)) {
        alert("❌ Please enter a valid number!");
        continue;
      }
  
      if (guess === randomNumber) {
        alert(`🎉 Correct! The number was ${randomNumber}. You guessed it in ${attempts} tries.`);
        break;
      } else if (guess < randomNumber) {
        alert("📉 Too low! Try again.");
      } else {
        alert("📈 Too high! Try again.");
      }
    }
  }
  
  // Start the game
  guessGame();
  