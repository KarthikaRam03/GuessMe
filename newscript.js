var backgroundmusic=document.getElementById("background-music");

document.addEventListener("DOMContentLoaded", function () {
    backgroundmusic.play();
  let secretNumber;
  let guesses = 0;

  function generateSecretNumber() {
      let digits = [...Array(10).keys()];
      digits.sort(() => Math.random() - 0.5);
      return digits.slice(0, 4).join("");
  }

  function compareNumbers(guess) {
      let result = "";
      for (let i = 0; i < 4; i++) {
          let guessDigit = guess.charAt(i);
          let secretDigit = secretNumber.charAt(i);

          if (guessDigit === secretDigit) {
              result += "+";
          } else if (secretNumber.includes(guessDigit)) {
              result += "-";
          } else {
              result += " ";
          }
      }
      return result;
  }

  function displayResult(result) {
      document.getElementById("resultText").textContent = "Result: " + result;
  }

  function newGame() {
      secretNumber = generateSecretNumber();
      guesses = 0;
      displayResult("");

      document.getElementById("guessButton").disabled = false;
      document.getElementById("newGameButton").disabled = true;
  }

  function checkGuess() {
      let guess = document.getElementById("guessInput").value;
      if (!/^\d{4}$/.test(guess)) {
          alert("Invalid input. Please enter a 4-digit number.");
          return;
      }

      guesses++;
      let result = compareNumbers(guess);
      displayResult(result);

      if (result === "++++") {
          document.getElementById("guessButton").disabled = true;
          document.getElementById("newGameButton").disabled = false;
          alert(`Congratulations! You guessed the number in ${guesses} tries.`);
      }
  }

  document.getElementById("guessButton").addEventListener("click", checkGuess);
  document.getElementById("newGameButton").addEventListener("click", newGame);

  newGame();
});