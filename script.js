const startButton = document.getElementById('startButton');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const submitBtn = document.getElementById('submitBtn');
const nameInput = document.getElementById('nameInput');
var backgroundmusic=document.getElementById("background-music");

startButton.addEventListener('click', () => {
  backgroundmusic.play();
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

submitBtn.addEventListener('click', () => {
  const playerName = nameInput.value;
  if (playerName.trim() !== '') {
    alert(`Hello, ${playerName}! The game will start now.`);
    // Add your game start logic here.
  } else {
    alert('Please enter your name before starting the game.');
  }
  modal.style.display = 'none';
});
