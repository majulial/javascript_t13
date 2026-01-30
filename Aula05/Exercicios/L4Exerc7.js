const read = require("readline-sync");


const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let numero = read.questionInt("Digite um numero: ");


if(vetor.indexOf(numero) && vetor.indexOf(numero) === 0){
    console.log(`A posicao do ${numero} é ${vetor.indexOf(numero)}`)
} else {
    console.log(`O numero ${numero} nao foi encontrado!`);
}