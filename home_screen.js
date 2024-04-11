document.getElementById("new-game-button").addEventListener("click", function(){
    window.location.href = "new_game_screen.html";
});

const startText = document.getElementById("start-text");

document.addEventListener("keydown", (event) => {
if (event.key.match(/^[a-zA-Z]$/)) {
    startText.style.display = "none";
}
});


