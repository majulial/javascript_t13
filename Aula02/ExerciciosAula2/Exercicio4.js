const leia = require("readline-sync");

let n1 = leia.questionFloat("Digite o primeiro numero: ");
let n2 = leia.questionFloat("Digite o segundo: ");
let n3 = leia.questionFloat("Digite o terceiro: ");
let n4 = leia.questionFloat("Digite o quarto: ");

let calculo = (n1 * n2) - (n3 * n4);

console.log(`A diferença é: ${calculo} `)

