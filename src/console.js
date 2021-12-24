const { instruction } = require("./model/instructions");
const { mostrarMenu, pausa } = require("./model/menu");
const { SaveData } = require("./database/dataBase")

const read = require("readline");
const { Game } = require("./model/game");
const { Round } = require("./model/Round");

let initValues = undefined;

const loadGame = () => {
  const { user: fileGame} =  require("./database/game.json");
  const roundFile = require("./database/rounds.json");

  const roundsInstance = roundFile.map(
    (r) => new Round(r.level , parseInt(r.award), r.category, r.questions)
  );
  
  // load game or reset game
  if (initValues){
    return new Game(
      { name: initValues.name, level: initValues.level, score: initValues.score },
      roundsInstance,
      initValues.level
    );
  }
  else {return new Game(
    { name: fileGame.name, level: fileGame.level, score: fileGame.score },
    roundsInstance,
    fileGame.level
  );}
 
};

const mainGame = async () => {
	const game = loadGame();
	

  while (!game.isGameOver) {

		const { opt, currentQuestion } = await roundGame(game);
		if(opt == 5){
      game.isGameOver = true;
      SaveData({ user: game.user}, './database/game.json');
		}else {

			game.nextRound(currentQuestion.answers[opt - 1]);
		}


	}
	
  /// mostrar score, guardar score y salir
  if(!game.currentRound){
    SaveData({ user: {...game.user, level: 0}}, './database/game.json');
    initValues = {...game.user, level: 0}; 

  }
	console.log(`Tu puntaje fue ${game.user.score}`);

	await pausa();
};

const roundGame = (game) => {
  return new Promise((resolve) => {
    console.clear();

    const currentQuestion = game.currentRound.chooseQuestion();
    console.log(`Estas en la categoria ${game.currentRound.category}`);
    console.log(`La pregunta es: ${currentQuestion.nameQuestion}`);

    currentQuestion.answers.forEach((answer, index) =>
      console.log(`${index + 1} : ${answer.answer}`)
    );

    console.log('Presiona 5 para salir');


    const readline = read.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question(`Seleccione una opción: `, (opt) => {
      readline.close();
      resolve({ opt, currentQuestion, game });
    });
  });
};

const main = async () => {
  let aux = "";
  do {
    aux = await mostrarMenu();

    if (aux === "1") await mainGame();
    if (aux == "2") await instruction();
  } while (aux !== "0");
};

main();
