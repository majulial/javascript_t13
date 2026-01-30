const leia = require("readline-sync");


//let numero = [10, 25, 40, 80, 100];

let cores = [];



for (let indice = 0; indice < cores.length; indice ++){    
cores[indice] = leia.question("Digite o nome de uma cor: ");

}



console.table(cores);