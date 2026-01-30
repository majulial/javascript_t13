const read = require("readline-sync");

let numero = 0;
let contador = 0; 
let soma = 0;

do {
    numero = read.questionInt("Digite um numero: ");
    if (numero !== 0 && numero % 3 === 0){
        soma += numero;
        contador++;
    }
} while (numero !== 0)

    if (contador > 0){
        let med = soma / contador;
        console.log(`A media de todos os numeros multiplos de 3 é: ${med.toFixed(2)}`);
    } else {
        console.log("Digite um numero válido!");
    }