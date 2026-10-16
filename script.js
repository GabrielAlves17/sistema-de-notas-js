let media = 0;
let somanotas = 0;
let qntNotas = 0;
let turma =[];

let qntAlunos = Number(prompt("Quantos alunos tem na sua turma? "))
let alunos = 0;
let faltasAluno = 0;
let diasAula = 200;

while(alunos < qntAlunos){
    let nomeAluno = prompt('Digite o nome do aluno: '); 
    let notaAluno =  Number(prompt('Digite a nota do aluno' + nomeAluno))
    let faltaAluno = Number(prompt('Digite o total de faltas do' + nomeAluno))
    let calculoPorcentagem = faltaAluno / diasAula * 100

    let aluno = {
       nome: nomeAluno,
       boletim: notaAluno,
       faltas: faltaAluno,
       porcentageFaltas: calculoPorcentagem
    }

    turma.push(aluno)

    alunos++
}

console.log(faltasAluno) 
 
console.log(turma)

for(let i = 0; i < turma.length; i++){
    if(regrasAprovacao(turma[i].faltas, turma[i].boletim) === "Recuperação"){
        console.log("O aluno", turma[i].nome, "Tirou a nota", turma[i].boletim, "e teve", turma[i].porcentageFaltas, "% faltas", "e está de", regrasAprovacao(turma[i].faltas, turma[i].boletim))
    }
    else {
    console.log("O aluno", turma[i].nome, "Tirou a nota", turma[i].boletim, "e teve", turma[i].porcentageFaltas, "% faltas", "e foi", regrasAprovacao(turma[i].faltas, turma[i].boletim))
    }}

media = somanotas / qntNotas

function resultado(nota){
    if(nota > 5){
        return ("Aprovado")
    } else{
        return("reprovado")
    }
    
}



function regrasAprovacao (porcentageFaltas, notas){
    if(notas >= 5 && porcentageFaltas < 25){
        return ("Aprovado")
    } else if (notas <= 4.9 && porcentageFaltas < 25){
        return ("Recuperação")
    } else {
        return ("Reprovado")
    }
}


console.log("A media da turma é: ", media);
console.log("A soma geral de notas da turma é:", somanotas);
