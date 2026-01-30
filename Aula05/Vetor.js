


let numero = [10, 25, 40, 80, 100];

let cores = [];

// ou < numero.length (vai até o tamanho do vetor ´[array]) no lugar do indice < 5

for (let indice = 0; indice  < 5; indice ++){
    console.log(`numeros[${indice}] = ${numero[indice]}`);
}

console.log(`ta manho do vetor é: ${numero.length}`)

console.table(numero);