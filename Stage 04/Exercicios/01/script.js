/*
  Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/


let n1 = Number(prompt("Digite um número"))
let n2 = Number(prompt("Digite outro número"))

let sum = n1 + n2
let sub 
let multi = n1 * n2
let div = n1 / n2
let rest = n1 % n2
let par 
// Lógica para subtração
  if (n1>n2){
    sub = n1-n2
  }else{
    sub = n2-n1
  }
  
  
  if (rest == 0){
    par = "par"
  }else{
    par = "impar"
  }

alert(`
    Soma: ${sum}
    Subtração: ${sub}
    Multiplicação: ${multi}
    Divisão: ${div}
    Resto: ${rest}
    A soma dos dois números é ${par}    
`)


