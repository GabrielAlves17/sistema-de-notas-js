let turma =[];
let media = 0;
let somanotas = 0;
let faltasAluno = 0;
let diasAula = 200;
let qntAlunos = Number(prompt("Quantos alunos tem na sua turma? "))
let alunos = 0;

while(alunos < qntAlunos){
    let nomeAluno = prompt('Digite o nome do aluno: '); 
    let notaAluno =  Number(prompt('Digite a nota do aluno ' + nomeAluno))
    let faltaAluno = Number(prompt('Digite o total de faltas do aluno ' + nomeAluno))
    let calculoPorcentagem = faltaAluno / diasAula * 100

    let aluno = {
       nome: nomeAluno,
       boletim: notaAluno,
       faltas: faltaAluno,
       porcentageFaltas: calculoPorcentagem
    }

    somanotas = somanotas + notaAluno 

    turma.push(aluno)

    alunos++
}

console.log(turma)

for(let i = 0; i < turma.length; i++){
    if(regrasAprovacao(turma[i].porcentageFaltas, turma[i].boletim) === "Recuperação"){
        console.log("O aluno", turma[i].nome, "Tirou a nota", turma[i].boletim, "e teve", turma[i].porcentageFaltas, "% de faltas", "e está de", regrasAprovacao(turma[i].porcentageFaltas, turma[i].boletim), "Motivo:", motivoFinal(turma[i].porcentageFaltas, turma[i].boletim))
    }
    else {
    console.log("O aluno", turma[i].nome, "Tirou a nota", turma[i].boletim, "e teve", turma[i].porcentageFaltas, "% de faltas", "e foi", regrasAprovacao(turma[i].porcentageFaltas, turma[i].boletim), "Motivo:", motivoFinal(turma[i].porcentageFaltas, turma[i].boletim))
    }}

media = somanotas / qntAlunos


function regrasAprovacao (porcentageFaltas, notas){
    if(notas >= 5 && porcentageFaltas < 25){
        return ("Aprovado")
    } else if (notas < 5 && porcentageFaltas < 25){
        return ("Recuperação")
    } else {
        return ("Reprovado")
    }
}

function motivoFinal(porcentageFaltas, nota) {
    if (porcentageFaltas >= 25) {
        return ("Porcentagem de faltas de 25% ou mais")
    } else if (nota < 5) {
        return ("Nota abaixo de 5")
    } else {
        return ("Nota e frequência dentro dos critérios")
    }
}




console.log("A media da turma é: ", media);
console.log("A soma geral de notas da turma é:", somanotas);
