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
