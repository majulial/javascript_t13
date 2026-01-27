const leia = require("readline-sync");


salario = leia.questionFloat("Digite seu salário: ");

bonus = leia.questionFloat("Digite seu bonus: ");

novosal = salario + bonus


console.log("Salário Liquído: ",
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format((
         novosal))
)