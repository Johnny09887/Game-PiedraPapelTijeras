/*Paso 4: Declarar las variables de puntuación de los jugadores*/
let humanScore = 0;
let computerScore = 0;

/*Paso 2:Código para obtener la elección de la computadora*/
function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3);
  if (randomInt === 0) {
    return "piedra";
  } else if (randomInt === 1) {
    return "papel";
  } else {
    return "tijera";
  }
}

/*Paso 3:Código para obtener la elección humana*/
function getHumanChoice() {
  let userChoice = prompt("Escribe piedra, papel o tijera").toLowerCase();

  if (
    userChoice === "piedra" ||
    userChoice === "papel" ||
    userChoice === "tijera"
  ) {
    return userChoice;
  } else {
    console.log("Elección no válida. Por favor ingresa piedra, papel o tijera");
    return getHumanChoice();
  }
}

/*Paso 5: Escribe la lógica para jugar una sola ronda*/
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  console.log("Humano elige: " + humanChoice);
  console.log("Computadora elige: " + computerChoice);

  if (humanChoice === computerChoice) {
    console.log(`¡Empate! Ambos eligieron ${humanChoice}`);
  } else if (
    (humanChoice === "piedra" && computerChoice === "tijera") ||
    (humanChoice === "papel" && computerChoice === "piedra") ||
    (humanChoice === "tijera" && computerChoice === "papel")
  ) {
    humanScore++;
    console.log(`¡Ganastes! ${humanChoice} le gana a ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`¡Perdiste! ${computerChoice} le gana a ${humanChoice}`);
  }
  console.log(
    `Puntuación actual: Humano ${humanScore} Computadora ${computerScore}`
  );
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
