const leia = require("readline-sync");

//definindo a matriz (linhas)


let matriz = new Array(2);


//add linhas da matriz (colunas)

for ( let indice = 0; indice < matriz.length; indice++) {
matriz[indice] = Array(3);
}



//entrada de dados matriz 

for (let linha = 0; linha < matriz.length; linha ++){
    for (let coluna = 0; coluna < matriz[linha].length; coluna ++){
        matriz[linha][coluna] = leia.questionInt(`matriz[${linha}] [${coluna}] =`);
    }
}




/*
let matriz = Array.from({ length: 2 }, () =>    Array.from({ length: 3 }, () => leia.questionInt("Digite um numero: ")) );

*/
// exibir os dados

console.table(matriz);