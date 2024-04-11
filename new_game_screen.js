// Get references to the form elements
const form = document.querySelector("#new-game-form");
const numPlayersInput = document.querySelector("#num-players");
const turnTimeLimitInput = document.querySelector("#turn-time-limit");
const enableBluffInput = document.querySelector("#enable-bluff");
const roundsPerGameInput = document.querySelector("#rounds-per-game");
const gameTimeLimitInput = document.querySelector("#game-time-limit");
const noTimeLimitInput = document.querySelector("#no-time-limit");
const playerRulesInput = document.querySelector("#player-rules");


// Submit handler for the form
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the values of the form inputs
  const numPlayers = numPlayersInput.value;
  const turnTimeLimit = turnTimeLimitInput.value;
  const enableBluff = enableBluffInput.checked;
  const roundsPerGame = roundsPerGameInput.value;
  const gameTimeLimit = gameTimeLimitInput.value;
  const noTimeLimit = noTimeLimitInput.checked;
  const playerRules = playerRulesInput.value;

  // Create a URL with the query parameters, including the timer value
  const url = `game_screen.html?numPlayers=${numPlayers}&turnTimeLimit=${turnTimeLimit}&enableBluff=${enableBluff}&numRounds=${roundsPerGame}&gameTimeLimit=${gameTimeLimit}&noTimeLimit=${noTimeLimit}&playerRules=${encodeURIComponent(playerRules)}&timer=${encodeURIComponent(turnTimeLimit)}`;

  // Redirect to the game screen
  window.location.href = url;
});





