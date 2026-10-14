let boletim = []
let media = 0;
let somanotas = 0;
let qntNotas = 0;

let qntAlunos = Number(prompt("Quantos alunos tem na sua turma? "))
let alunos = 0;

while (alunos < qntAlunos){
    let notas = Number(prompt("Digite a nota do aluno" + (alunos + 1)))
    boletim.push(notas)

    somanotas = somanotas + notas
    qntNotas = qntAlunos

    

    alunos++;
}

for(let i = 0; i < boletim.length; i++){
    console.log("O aluno", i + 1, "Tirou", boletim[
        i], "e foi", resultado(boletim[i]))
}

media = somanotas / qntNotas

function resultado(nota){
    if(nota > 5){
        return ("Aprovado")
    } else{
        return("reprovado")
    }
    
}



function regrasAprovacao (faltas, notas){
    if(notas >= 5 && faltas <= 20){
        return ("Aprovado")
    } else if (notas <= 4.9 && faltas <= 20){
        return ("Recuperação")
    } else {
        return ("Reprovado")
    }
}


console.log("A media da turma é: ", media);
console.log("A soma geral de notas da turma é:", somanotas);
console.log(boletim);
