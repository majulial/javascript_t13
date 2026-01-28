const leia = require("readline-sync");

let a = leia.questionInt("Digite o 1 numero: ");
let b = leia.questionInt("Digite o 2 numero: ");
let c = leia.questionInt("Digite o 2 numero: ");

let result = a + b;

if (result > c) {
    console.log("maior que c");
} else if (result < c) {
    console.log("menor que c");
} else if (result === c) {
    console.log("igual a c");
}

