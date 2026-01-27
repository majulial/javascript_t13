const leia = require("readline-sync");


let salarioBruto = 3500.90;
let adicional = 500.00;
let desconto = 200.00;
const bonus = 100.00;

let salarioLiquido = salarioBruto + adicional + (bonus * 5) - desconto;

console.log("Salário Liquído: ",
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(salarioLiquido)
)

