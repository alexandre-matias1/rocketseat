/* 
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação
  divisão e resto da divisão

  let numberOne = prompt("Digite um número")
  let numberTwo = prompt("Digite um número")

  let resSum = Number(numberOne) + Number(numberTwo)
  let resLess = Number(numberOne) - Number(numberTwo)
  let resMultiplication = Number(numberOne) * Number(numberTwo)
  let resDivision = Number(numberOne) / Number(numberTwo)
  let resRest = Number(numberOne) % Number(numberTwo)

  alert("Os dois números digitados resultaram em " + 
        "Soma: " + resSum + 
        "Subtração: " + resLess + 
        "Multiplicação: " + resMultiplication +
        "Divisão: " + resDivision +
        "Resto da divisão " + resRest)
*/

let firstNumber = prompt("Digite o primeiro número")
let secondNumber = prompt("Digite o segundo número")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum =  firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + mult)
alert('Divisão: ' + div)
alert('Resto: ' + restDiv)
