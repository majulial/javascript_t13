const read = require("readline-sync");

let notas = [];
let medias = [];


for (let i = 0; i < 10; i++) {
    notas[i] = [];
    let soma = 0;

    console.log(`\nDigite as notas do participante ${i + 1}:`);

    for (let x = 0; x < 4; x++) {
        notas[i][x] = read.questionFloat(`Nota ${x + 1} bimestre: `);
        soma += notas[i][x];
    }

        medias[i] = soma / 4;
}


console.log("\nMedias dos participantes: ");
for (let i = 0; i < medias.length; i++) {
    console.log(`Participante ${i + 1}: ${medias[i].toFixed(2)}`);
}