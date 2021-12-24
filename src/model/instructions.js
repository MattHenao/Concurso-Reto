//const { pausa } = require('./menu')
const read = require("readline");

const instruction = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("======================================");
    console.log("       prueba de instrucciones");
    console.log("======================================\n");

    console.log(`El juego consiste en responder una serie
de preguntas con 4 posibles respuestas.
Consta de 5 rondas, y cada ronda consta
de 5 preguntas. En cada ronda se va aumentado
la dificultad de las preguntas. Cada vez que 
respondas una pregunta correctamente se te 
daran puntos que puedes acumular para tener
un buen puntaje al final, pero si fallas una
pregunta, PIERDES TU PROGRESO, asi que ten
cuidado. Y por ultimo, para guardar tu progreso, al
final de cada ronda puedes guardarlo o seguir,
puedes presionar "5" para salir de la partida y
guardar progreso.
SUERTE!!!! :DDD`);
    const readline = read.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question(`Presione ENTER para regresar al menu`, (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

module.exports = {
  instruction,
};
