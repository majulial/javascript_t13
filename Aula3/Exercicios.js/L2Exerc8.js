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



/*
let codOperacao = read.questionInt("Operação: ");
let saldo = 1000.00;

switch (codOperacao) {
    case 1:
        console.log("Operação - Saldo");
        console.log("Saldo: R$" + saldo.toFixed(2));    

        break;

    case 2:
        console.log("Operação - Saque");
        let saque = read.questionFloat("Valor: R$ ")
        if (saldo >= saque) {
            saldo -= saque;
            console.log("Novo Saldo: R$" + saldo.toFixed(2));
        }
        else{
            console.log("Saldo Insuficiente!");
        }

        break;

    case 3:
        console.log("Operação - Saque");
        let deposito = rl.questionFloat("Valor: R$ ")
        saldo += deposito;
        console.log("Novo Saldo: R$" + saldo.toFixed(2));

        break;

    default:
        console.log("Operação Inválida!")
        break;
}


*/