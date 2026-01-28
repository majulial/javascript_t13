const leia = require("readline-sync");

let num = leia.questionInt("Digite um número: ");


if (num > 0 && num % 2 === 0 ) {
    console.log(`O número ${num} é par e positivo! `)
} else {
    console.log(`O número ${num} é ìmpar e negativo!`)
}