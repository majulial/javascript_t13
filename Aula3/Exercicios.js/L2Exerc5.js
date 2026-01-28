const leia = require("readline-sync");


console.log("\n===================================")
console.log("\n   CARDÁPIO - JÚLIA LANCHES        ")
console.log("\n===================================")
console.log("\n1    | Cachorro Quente | R$: 10.00 ")
console.log("\n2    | X-Salada        | R$: 15.00 ")
console.log("\n3    | X-Bacon         | R$: 18.00 ")
console.log("\n4    | Bauru           | R$: 12.00 ")
console.log("\n5    | Refrigerente    | R$: 8.00  ")
console.log("\n6    | Suco de Laranja | R$: 13.00 ")
console.log("\n===================================")


let num1 = 10
let num2 = 15
let num3 = 18
let num4 = 12
let num5 = 8
let num6 = 13

//let total = 

let opcao = leia.questionInt("Digite o codigo: ");
let quantidade = leia.questionInt("Digite a quantidade: ");

switch (opcao){
    case 1:  console.log("Cachorro Quente: ",
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(quantidade * num1)
)
    break;



    case 2:  console.log("X-Salada: ",
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(quantidade * num2)
)
    break;

    case 2:  console.log("X-Bacon: ",
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(quantidade * num3)
);

    break;

    case 4:  console.log("Bauru: ",
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format (quantidade * num4)
);

    break;
    case 5:  console.log("Refrigerante: ",
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(quantidade * num5)
);
    break;
    case 6: console.log("Suco de Laranja: ",
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(quantidade * num6)
);

    break;

}