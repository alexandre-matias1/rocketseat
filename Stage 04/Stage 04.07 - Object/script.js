/* 
  Crie uma lista de pacientes

  Cada paciente deverá conter 

  nome
  idade
  peso
  altura


  Escrevea uma lista contendo o nome dos pacientes

  --

  Dada uma lista de pacientes descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo do IMC
  
  

  // criação
function liquidificador(fruta1, fruta2){
  const suco = fruta1 + fruta2
  return suco
}

// execução
let meuSuco = liquidificador("maçã", "banana")
alert(meuSuco)

*/

const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 1.90,
  },
  {
    name: "Boris",
    age: 22,
    weight: 90,
    height: 1.70,
  },
  {
    name: "Roberta",
    age: 20,
    weight: 100,
    height: 1.90,
  },
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 1.90,
  }
]

function printPatientIMC (patient){
  return `
    Paciente ${patient.name} possui o IMC de:
    ${(patient.weight/(patient.height**2)).toFixed(2)}
  `
}

for (let patient of patients){
  alert(printPatientIMC(patient))
}


















/*
let patientsNames = []
let patientsAge = []
let patientsWeight = []
let patientsHeight= []

for (let patient of patients){
  patientsNames.push(patient.name)
  patientsAge.push(patient.age)
  patientsWeight.push(patient.weight)
  patientsHeight.push(patient.height)
}

let option;




while(option != 5){
option = Number(prompt(`
  Digite qual paciente deseja calcular IMC
  1. Luiz
  2. Boris
  3. Roberta
  4. Luis 
  5. Caso deseje fechar o app, digite 5.
  `));

  formIMC = parseFloat(patientsWeight[option-1])/(parseFloat(patientsHeight[option-1])*parseFloat(patientsHeight[option-1]))
  formIMC = formIMC.toFixed(2)
  switch(option){
    case 1:
      alert(`O IMC do paciente ${patientsNames[option-1]} é de ${formIMC}`)
      break;
    case 2:
      alert(`O IMC do paciente ${patientsNames[option-1]} é de ${formIMC}`)
      break;
    case 3:
      alert(`O IMC do paciente ${patientsNames[option-1]} é de ${formIMC}`)
    break;
    case 4:
      alert(`O IMC do paciente ${patientsNames[option-1]} é de ${formIMC}`)
    break;
    case 5:
      alert("Encerrando app")
    break;
    default:
      alert("Opção invalida")
  }
}





/*
alert(`
Name: ${patientsNames[0]}
Age: ${patientsAge[0]}
Weight: ${patientsWeight[0]}
Height: ${patientsHeight[0]}
`)
*/