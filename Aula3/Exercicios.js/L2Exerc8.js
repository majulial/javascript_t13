const leia = require("readline-sync");

let saldo = 1000.00


let operacao = leia.questionFloat("Digite a opcao que deseja: ");
let saque = leia.questionFloat("Digite a opcao que deseja: ");

switch (operacao) {
    case 1:
       console.log("Operação - Saldo \n " ,"Saldo:",
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(saldo));

break;

    case 2: 
       console.log(` ${saque > saldo} = Saldo insuficiente`);

    break;

    case 3: 
    break;

}