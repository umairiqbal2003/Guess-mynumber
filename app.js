"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "You win the game ❤️";

// document.querySelector(".score").textContent = 50;

// document.querySelector(".number").textContent = 14;

// document.querySelector(".guess").value = 22;

// // document.querySelector(".guess").value = 22;
// console.log(document.querySelector(".guess").value);

// document.querySelector(".between").textContent = "Umair iqbal game";

// let score = 20;

// const secretNumber = Math.trunc(Math.random() * 20 + 1);

// document.querySelector(".check").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);
//   if (!guess) {
//     document.querySelector(".message").textContent = "🚫 No number";
//   } else if (guess === secretNumber) {
//     document.querySelector(".message").textContent = "Correct Number 🏆";
//     document.querySelector(".number").textContent = secretNumber;
//     document.querySelector("body").style.backgroundColor = "#60b347";
//     document.querySelector(".number").style.width = "30rem";
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📈 Too high";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "🧨 You lost the game";
//       document.querySelector(".score").textContent = 0;
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📉 Too low";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "🧨 You lost the game";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
//   console.log(guess);
// });

// document.querySelector(".again").addEventListener("click", function () {
//   document.querySelector(".score").textContent = 20;
//   document.querySelector(".message").textContent = "Start guessing...";
//   document.querySelector(".number").textContent = "?";
//   document.querySelector(".guess").value = "";
//   document.querySelector("body").style.backgroundColor = "#222";
//   document.querySelector(".number").style.width = "15rem";
// });

let score = 20;
let highscore = 0;

let secretNumber = Math.trunc(Math.random() * 20 + 1);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number 🏆";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "📈 Too high" : "📉 Too low";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🧨 You lose the Game";
      document.querySelector(".score").textContent = 0;
    }
  }

  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "📈 Too high";
  //       score = score - 1;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "🧨 You lose the Game";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "📉 Too low";
  //       score = score - 1;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "🧨 You lose the Game";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
