const read = require("readline-sync");

let idade = 0;
let menores21 = 0;
let maiores50 = 0;

console.log("\n===================================");
console.log("\n              MENU                 ");;
console.log("\n===================================")


while( idade >= 0){
    idade = read.questionInt("Digite sua idade:   ");
    if (idade < 21 && idade >= 0)
       menores21++;

    if (idade > 50) 
        maiores50++;
    
       // continua = leia.keyInYNStrict("\nDeseja continuar? ");
    

   // idade = read.questionInt("Opecao invalida!");
}

console.log(`Total de pessoas menores de 21 anos: ${menores21} e total de pessoas acima de 50 anos: ${maiores50}  `)







