let userScore = 0;
let compScore = 0;

let compScoreChange = document.getElementById("compScore");
let userScoreChange = document.getElementById("userScore");

let msg = document.getElementById("msgpoper");

let genCompChoice = () => {
  let options = ["rock", "paper", "scissor"];
  let randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

let drawGame = () => {
  msg.innerText = "Its a Draw";
  msg.style.backgroundColor = "yellow";
  msg.style.color = "black";
};

let showWinner = (userWin, userChoice, compChoice) => {
  if (userWin == true) {
    userScore++;
    userScoreChange.innerText = userScore;
    msg.innerText = `YAY !! You Won ! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    msg.style.color = "white";
  }else{
    compScore++;
    compScoreChange.innerText = compScore;
    msg.innerText = `SHOO!! You Lost ! ${compChoice} defeated ${userChoice}`;
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
  }
};

let playGame = (userChoice) => {
  console.log(userChoice);
  let compChoice = genCompChoice();
  console.log(compChoice);
  if (userChoice == compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //paper,scissor
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //scissor,rock
      userWin = compChoice === "scissor" ? false : true;
    } else {
      //rock,paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

let choices = document.querySelectorAll(".circle");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
