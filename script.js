/*Paso 2:Código para obtener la elección de la computadora*/
function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3);
  if (randomInt === 0) {
    return "Piedra";
  } else if (randomInt === 1) {
    return "Papel";
  } else {
    return "Tijeras";
  }
}
console.log(getComputerChoice());

/*Paso 3:Código para obtener la elección humana*/
function getHumanChoice() {
  let userChoice = prompt("Escribe piedra, papel o tijera").toLocaleLowerCase();

  if (
    userChoice === "piedra" ||
    userChoice === "papel" ||
    userChoice === "tijeras"
  ) {
    return userChoice;
  } else {
    console.log("Elección no válida. Por favor ingresa piedra, papel o tijera");
    return getHumanChoice();
  }
}
console.log(getHumanChoice());
