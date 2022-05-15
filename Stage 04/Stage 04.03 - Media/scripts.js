/*
  Solicitar o nome do aluno e as 3 notas 
  do bimestre calcular a média daquele aluno.

  Se o aluno passou no bimestre, dar os parabéns

  Se o aluno não passou no bimestre,
  motivar o aluno a dar seu melhor na prova 
  de recuperação

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota.


  let nameStudent = prompt("Digite o nome do aluno")

  let firstNote = prompt("Digite a nota da P1 do aluno " + nameStudent)
  let secondNote = prompt("Digite a nota da P2 do aluno " + nameStudent) 
  let thirdNote = prompt("Digite a nota da P3 do aluno " + nameStudent)

  firstNote = Number(firstNote)
  secondNote = Number(secondNote)
  thirdNote = Number(thirdNote)

  media = (firstNote + secondNote + thirdNote)/3

  if (media > 6){
    alert("Parabéns " + nameStudent + " sua média no bimestre foi de: " + media)
  }else{
    alert("Infelizmente " + nameStudent + " você não atingiu a média no bimestre, ela foi: " + media + " mas não se preocupe, a atividade de recuperação sera dia 23/06. Boa sorte! :D " )
  }
*/

let nameStudent = prompt("Digite o nome do aluno")

let firstNote = prompt("Digite a nota da P1 do aluno " + nameStudent)
let secondNote = prompt("Digite a nota da P2 do aluno " + nameStudent) 
let thirdNote = prompt("Digite a nota da P3 do aluno " + nameStudent)

firstNote = Number(firstNote)
secondNote = Number(secondNote)
thirdNote = Number(thirdNote)

average = (firstNote + secondNote + thirdNote)/3

let result = average > 6

average = average.toFixed(2)

if (result){
  alert("Parabéns " + nameStudent + " sua média no bimestre foi de: " + average)
}else{
  alert("Infelizmente " + nameStudent + " você não atingiu a média no bimestre, ela foi: " + average + " mas não se preocupe, a atividade de recuperação sera dia 23/06. Boa sorte! :D " )
}
