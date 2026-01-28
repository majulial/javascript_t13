const leia = require("readline-sync");


console.log("\n============================")
console.log("\n CALCULADORA COM SWITCH CASE")
console.log("\n============================")
console.log("(+) - Soma                    ")
console.log("(-) - Subtração               ")
console.log("(*) - Multiplicação           ")
console.log("(/) - Divisão                 ")
console.log("\n============================")

let numero1 = leia.questionFloat("Digite o primeiro numero: ", {limitMessage:'digite um numero float'});

let numero2 = leia.questionFloat("Digite o primeiro numero: ", {limitMessage:'digite um numero float'});


let operacao = leia.keyIn("Digite a operacao: ");

 switch(operacao){
    case "+": 

    console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);

    break;

    case "-":
            console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);

    break;

    case "*":
        console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);

    break;

    case "/":
            console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);

    break;
    default:
        console.log("Operacao invalida.")


 }

