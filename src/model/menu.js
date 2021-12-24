 const  read =  require('readline');

const mostrarMenu = () =>{
    return new Promise(resolve => {
        console.clear()
        console.log('======================================');
        console.log('  Concurso de preguntas y respuestas')
        console.log('======================================\n');

        console.log(`1. Jugar`);
        console.log(`2. Instrucciones`);
        console.log(`0. Salir`);

        const readline = read.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        readline.question(`Seleccione una opción: `, (opt) => {
            readline.close();
            resolve(opt);
        })
    })
}


const pausa = () => {
    return new Promise((resolve)  => {
        const readline = read.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        readline.question(`\nPresione ENTER para continuar\n`, (opt) => {
            readline.close();
            resolve();
        })
    })

}

module.exports = {
    mostrarMenu,
    pausa
}