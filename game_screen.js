const maxLetters = 45;
const wordFormation = document.querySelector('#word-formation');
const wordFormationExtension = document.querySelector('#word-formation-extension');
const letterInput = document.querySelector('#letter-input');
const submitButton = document.querySelector('#submit-button');
const completeButton = document.querySelector('#complete-button');
const nextTurnButton = document.querySelector('#next-turn-button'); 
const result = document.querySelector('#result');
const playersList = document.querySelectorAll('.players-list p');
const playersScore = document.querySelectorAll('.players-score p');
let timeLeft = 60; // Initial time in seconds
const timerDisplay = document.getElementById('time-left');

function startTimer() {
    timerDisplay.textContent = timeLeft;
    const countdown = setInterval(() => {
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(countdown);
            // Logic for when the time is up
        } else {
            timerDisplay.textContent = timeLeft;
        }
    }, 1000);
}


let lettersAdded = 0;
let currentPlayer = 1;


function enableButtons() {
  completeButton.removeAttribute('disabled');
  nextTurnButton.removeAttribute('disabled');
}

letterInput.addEventListener('input', function() {
  if (letterInput.value.length > 0) {
    enableButtons();
  }
});

submitButton.addEventListener('click', function() {
  let letter = letterInput.value.trim().toLowerCase();

  if (lettersAdded < maxLetters && letter.length === 1 && /^[a-z]$/.test(letter)) {
    if (lettersAdded === 0) {
      wordFormation.textContent = ` ${letter}`;
    } else {
      wordFormation.textContent += ` ${letter}`;
    }
    lettersAdded++;

    if (lettersAdded === maxLetters) {
      result.textContent = "Maximum number of letters reached.";
    }
    
    if (lettersAdded >= 5) {
      enableButtons();
    }
  } else {
    result.textContent = "Please enter a valid single letter.";
  }

  letterInput.value = '';
});


completeButton.addEventListener('click', function() {
  // Get the completed word
  const completedWord = wordFormation.textContent.trim();

  // Check if the completed word is not empty
  if (completedWord !== '') {
    // Placeholder logic for word validity check (replace with actual logic)
    // if (isValidWord(completedWord)) {
      // Display completion message
      result.textContent = "You have completed a valid word sequence, emptying the word sequence pattern.";

      // Do not update player score for the current turn

      // Increment to the next player's turn
      currentPlayer = (currentPlayer % 3) + 1;

      // Update player indicators
      playersList.forEach((player, index) => {
        player.classList.toggle('current', index === currentPlayer - 1);
      });

      // Reset game board for the new turn
      resetTurn();
    // } else {
    //   // Display an error message for an invalid word
    //   result.textContent = "Invalid word. Try again!";
    // }
  } else {
    // Display a message indicating that no word was entered
    result.textContent = "Please enter a word.";
  }
});



// Example of using a dictionary library (e.g., WordNet) for word validation
function isValidWord(word) {
  // Logic to check if the word is valid using the dictionary library
  // Example:
  // return dictionary.isValidWord(word);
}



nextTurnButton.addEventListener('click', function() {
  // Increment to the next player
  currentPlayer = (currentPlayer % 3) + 1;

  // Update player indicators (change font weight to bold for the current player)
  playersList.forEach((player, index) => {
    player.classList.toggle('current', index === currentPlayer - 1);
  });

  // Reset game-related data for the new turn
  resetTurn();

  // Set up the new turn (assuming setupTurn function is defined)
  setupTurn();
});



function resetTurn() {
  // Reset any game-related data for the new turn
  wordFormation.textContent = '';
  wordFormationExtension.textContent = '';
  lettersAdded = 0;
  completeButton.setAttribute('disabled', true);
  nextTurnButton.setAttribute('disabled', true);
  clearInterval(timeLeft);
  timerDisplay.textContent = '';
}

function setupTurn() {
  // Set up the game for the new turn
  letterInput.focus();
  console.log('letterInout', letterInput.focus());
  lockLetter = wordFormation.textContent.trim().split(' ')[0];
  console.log('wordFormation', wordFormation, 'lockLetter', lockLetter)  
  wordFormation.textContent = ` ${lockLetter} `;
  submitButton.removeAttribute('disabled');
}



