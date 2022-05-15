/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.


Como base foi utilizada o formato de recuperação da minha faculdade, onde a P3 substitui a menor nota.
*/

const students = [
  {
    name: "Andressa",
    n1: 7.0,
    n2: 3.0
  },
  {
    name: "Bruno",
    n1: 8.0,
    n2: 10.0
  },
  {
    name: "Caio",
    n1: 7.0,
    n2: 7.5
  },
  {
    name: "Igor",
    n1: 10.0,
    n2: 10.0
  },
  {
    name: "Andre",
    n1: 1.0,
    n2: 3.0
  }
]

let media
let txt
let rec = 0
let p3

function printStudentNotes(average){
  // Calcular valor necessário p/ P3
  if (average.n1 > average.n2){
    rec = 14 -average.n1 
    }else{
    rec =  14 -average.n2 
  }
  // Se a nota máxima da P3 que é 10, vai ajudar o aluno a passar.
  if (rec > 10){
    p3 = "Infelizmente mesmo realizando a P3 você não atingirá a nota máxima, converse com seu professor."
  }else{
    p3 = `faça a P3 e tire uma nota maior que ${rec}`
  }
  // Calculo da média
  let media = ((average.n1+average.n2)/2)
  if (media > 7){
    txt = `Parabéns, você foi aprovado!`
  }else{
    txt = `Você não atingiu a nota máxima, ${p3}`
  }
  //Mensagem enviada
  return `
    O(a) aluno(a) ${average.name} tirou:
    P1: ${average.n1}
    P2: ${average.n2}
    Média do aluno(a): ${media}
    ${txt}
  `
}

for (let average of students){
  alert(printStudentNotes(average))
}