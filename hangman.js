const canvas = document.getElementById("hangman");
const context = canvas.getContext("2d");

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function draw(part) {
  switch (part) {
    case "gallows":
      context.strokeStyle = "#444";
      context.lineWidth = 10;
      context.beginPath();
      context.moveTo(175, 225);
      context.lineTo(5, 225);
      context.moveTo(40, 225);
      context.lineTo(25, 5);
      context.lineTo(100, 5);
      context.lineTo(100, 25);
      context.stroke();
      break;

    case "head":
      context.lineWidth = 5;
      context.beginPath();
      context.arc(100, 50, 25, 0, Math.PI * 2, true);
      context.closePath();
      context.stroke();
      break;

    case "body":
      context.beginPath();
      context.moveTo(100, 75);
      context.lineTo(100, 140);
      context.stroke();
      break;

    case "rightHarm":
      context.beginPath();
      context.moveTo(100, 85);
      context.lineTo(60, 100);
      context.stroke();
      break;

    case "leftHarm":
      context.beginPath();
      context.moveTo(100, 85);
      context.lineTo(140, 100);
      context.stroke();
      break;

    case "rightLeg":
      context.beginPath();
      context.moveTo(100, 140);
      context.lineTo(80, 190);
      context.stroke();
      break;

    case "rightFoot":
      context.beginPath();
      context.moveTo(82, 190);
      context.lineTo(70, 185);
      context.stroke();
      break;

    case "leftLeg":
      context.beginPath();
      context.moveTo(100, 140);
      context.lineTo(125, 190);
      context.stroke();
      break;

    case "leftFoot":
      context.beginPath();
      context.moveTo(122, 190);
      context.lineTo(135, 185);
      context.stroke();
      break;
  }
}

const bodyParts = [
  "gallows",
  "head",
  "body",
  "rightHarm",
  "leftHarm",
  "rightLeg",
  "leftLeg",
];

let word = ["A", "P", "P", "L", "E"];
let userWord = ["_", "_", "_", "_", "_"];
let wordElement = document.getElementById("word");
wordElement.innerText = userWord.join(" ");
let resultElement = document.getElementById("result");
let mistakes = 0;

function onLetterClick(event) {
  let userBtnElement = event.target;
  let userLetter = userBtnElement.innerText;
  if (word[0] == userLetter) {
    userWord[0] = userLetter;
  }
  if (word[1] == userLetter) {
    userWord[1] = userLetter;
  }
  if (word[2] == userLetter) {
    userWord[2] = userLetter;
  }
  if (word[3] == userLetter) {
    userWord[3] = userLetter;
  }
  if (word[4] == userLetter) {
    userWord[4] = userLetter;
  }

  if (
    userLetter !== word[0] &&
    userLetter !== word[1] &&
    userLetter !== word[2] &&
    userLetter !== word[3] &&
    userLetter !== word[4]
  ) {
    draw(bodyParts[mistakes]);
    mistakes = mistakes + 1;
  }

  //Winning case
  if (word.toString() === userWord.toString()) {
    resultElement.innerText = "You Won";
    //Wait a bit
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
  //Lossing Case
  if (mistakes === 7) {
    resultElement.innerText = "You Lost Try Agian";
    //Wait a bit
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  wordElement.innerText = userWord.join(" ");

  userBtnElement.remove();
}
