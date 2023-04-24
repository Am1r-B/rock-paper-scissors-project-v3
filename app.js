const resultDisplay = document.querySelector("#result");
const choicesDisplay = document.querySelector("#choices");
const choices = ["rock", "paper", "scissors"];

const handleClick = (e) => {
  getResults(
    e.target.innerHTML,
    choices[Math.floor(Math.random() * choices.length)]
  );
};
choices.forEach((choice) => {
  const button = document.createElement("button");
  button.innerHTML = choice;
  button.addEventListener("click", handleClick);
  choicesDisplay.appendChild(button);
});

const getResults = (userChoice, computerChoice) => {
  let result;
  if (userChoice === computerChoice) {
    result = "IT'S A DRAW!";
  } else {
    switch (userChoice + computerChoice) {
      case "rockscissors":
      case "paperrock":
      case "scissorspaper":
        result = "YOU WIN!";
        break;
      case "rockpaper":
      case "paperscissors":
      case "scissorsrock":
        result = "YOU LOSE!";
        break;
      default:
        result = "SOMETHING IS WRONG!!!";
    }
  }
  resultDisplay.innerHTML = `You chose ${userChoice} and the computer chose ${computerChoice} , ${result}`;
};
