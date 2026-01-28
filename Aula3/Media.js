const leia = require("readline-sync");

let media = leia.questionFloat("Digite a media: ");

if (media >= 7){
    console.log("passou");
    // (media < 7)
}else if (media >=5 && media < 7) {
    console.log("aluno de exame")
} else{
    console.log("nao passou");
}