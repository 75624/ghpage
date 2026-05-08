const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const scoreElement = document.getElementById("score");

let score = 0;
let isGameOver = false;

// Function to trigger the jump
function jump() {
    if (dino.classList != "animate-jump") {
        dino.classList.add("animate-jump");
        // Remove the class after animation ends (500ms)
        setTimeout(function() {
            dino.classList.remove("animate-jump");
        }, 500);
    }
}

// Event Listeners for controls
document.addEventListener("keydown", (event) => {
    if (event.code === "Space") jump();
});

document.addEventListener("mousedown", jump);

// Game Loop: Collision Detection
let checkDead = setInterval(function() {
    if (isGameOver) return;

    // Get current position of Dino and Cactus
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    // Logic: If cactus is between 0 and 50px (dino's width) 
    // and dino is not high enough to clear it (150px top)
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 150) {
        cactus.style.animation = "none";
        cactus.style.display = "none";
        isGameOver = true;
        alert("Game Over! Score: " + Math.floor(score));
        location.reload(); // Restart game
    } else {
        score += 0.01;
        scoreElement.innerHTML = "Score: " + Math.floor(score);
    }
}, 10);