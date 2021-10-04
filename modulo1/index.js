// Iniciando

let nome = "SEM VALOR"
let idade = "SEM VALOR"
console.log(typeof nome, typeof idade)

// Declarada como string

 nome = prompt("Qual o seu nome?")
console.log(typeof nome, nome)
idade = prompt("Qual a sua idade")
idade = Number(idade)
console.log(typeof idade, idade)
console.log("Olá", nome, "você tem", idade, "anos") 

// Certinho, variavéis declaradas com sucesso

// Programa que faça 3 perguntas de Sim ou Não
let alturaMaior = ""
alturaMaior = prompt("Voce possui a altura maior?")
console.log(alturaMaior)

let alturaMenor =""
alturaMenor = prompt("Voce possui a altura menor?")
console.log(alturaMenor)

let alturaMedia =""
alturaMedia = prompt("Voce possui a altura media?")
console.log(alturaMedia)

// Finalizado

//Exercíco 3
let a = 10
let b = 20

// Aqui faremos uma lógica para trocar os valores
let c = a
let d =b

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", d) // O novo valor de a é 25
console.log("O novo valor de b é", c) // O novo valor de b é 10