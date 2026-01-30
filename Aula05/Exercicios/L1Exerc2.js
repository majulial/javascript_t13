const read = require("readline-sync");

let par = 0;
let impar = 0;
 let numero;


 for (let i = 1; i <= 10; i++){
    numero = read.questionInt("Digite o " + i + " numero inteiro: ")
    if(numero % 2 === 0) {
        par++
    } else {
        impar++;
    }
 }

 console.log(`Quantidade de numeros par ${par} e impares ${impar}`)








//console.table(num);