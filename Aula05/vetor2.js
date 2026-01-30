const leia = require("readline-sync");


let numero = [10, 25, 40, 80, 100];

let cores = Array(5);

// ou < numero.length (vai até o tamanho do vetor ´[array]) no lugar do indice < 5

for (let indice = 0; indice  < 5; indice ++){
    console.log(`numeros[${indice}] = ${numero[indice]}`);
}

console.log(`tamanho do vetor é: ${numero.length}`)

console.table(numero);

for (let indice = 0; indice < cores.length; indice ++){
cores[indice] = leia.question("Digite o nome de uma cor: ");
}

console.table(cores);

//console.table(numero.sort());