const leia = require("readline-sync");

console.log("\n============================")
console.log("\n CALCULADORA COM SWITCH CASE")
console.log("\n============================")
console.log("\n1 - Soma                    ")
console.log("\n2 - Subtração               ")
console.log("\n3 - Multiplicação           ")
console.log("\n4 - Divisão                 ")
console.log("\n============================")

let numero1 = leia.questionFloat("Digite o primeiro numero: ", {limitMessage:'digite um numero float'});

let numero2 = leia.questionFloat("Digite o primeiro numero: ", {limitMessage:'digite um numero float'});


let operacao = leia.questionInt("Digite o nuemro da operacao: ", {limitMessage:'digite um numero inteiro'});

 switch(operacao){
    case 1: 

    console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);

    break;

    case 2:
            console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);

    break;

    case 3:
        console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);

    break;

    case 4:
            console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);

    break;
    default:
        console.log("Operacao invalida.")


 }