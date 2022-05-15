Boas práticas na escrita de variáveis

-Em inglês
-Sem espaços ou acentuações especiais no nome
-Não pode iniciar com número
-camelCase 

[] Titpo de dado: Number
[] typeof() - ler tipo de dado
[] Operador matemático
[] Manipulação de dados
  [] type conversion (type casting)
  [] Number (funçao construtora que converte dados p/ número)
  [] String (funçao construtora que converte dados p/ string)
[] Ordem de precedência

[
  let numberOne = prompt("Digite o primeiro número")
  let numberTwo = prompt("Digite o segundo número")
  let result = Number(numberOne) + Number(numberTwo)

  alert("Resultado final: " + result)

]  