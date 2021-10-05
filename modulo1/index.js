 
 
 /* 1 Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
 const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
FALSE

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
FALSE

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
TRUE

console.log("d. ", typeof resultado) 
BOOLEAN
*/


/* 2 Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)
É importante colocar o Number() pois o comando prompt entende que é uma string e por isto faz a concatenação.
*/


/*Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero)+ Number(segundoNumero)
console.log(soma)
*/



// Exercícios de escrita de código



 /*let idade = prompt("Qual a sua idade?")
let idadeMelhorAmigo = prompt ("Qual a idade do seu melhor amigo ou amiga?")
console.log( "Sua idade é maior do que a do seu melhor amigo?", idade > idadeMelhorAmigo)

const soma = idade - idadeMelhorAmigo
console.log("A diferença de idade é de", soma, "anos.") 

*/




/* // 2 Faça um programa que:


let numero = prompt("POR FAVOR, INSIRA UM NÚMERO PAR")
console.log(Number(numero) % 2)

//Toda e qualquer divisão de números pares o resto é 0.
// Quando adicionamos um número ímpar ele nos retorn o resto da divisão.


*/


/* 3 Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console

const idadeDoUsuario = prompt("Sua idade em anos?")
let resultadoMeses = idadeDoUsuario * 12
console.log("Sua idade em meses é de", resultadoMeses )

let resultadoEmDias = idadeDoUsuario * 365
console.log("Sua idade em dias é de", resultadoEmDias)

let resultadoEmHoras = resultadoEmDias * 24
console.log("Sua idade em horas é de", resultadoEmHoras) */


/* 4 

const primeiroNum = prompt("Digite algum numero")
const segundoNum = prompt("Digite o segundo numero")
let result = Number(primeiroNum) > Number(segundoNum)
console.log(result)

result =  Number(primeiroNum) === Number(segundoNum)
console.log(result)

result =  Number(primeiroNum) % Number(segundoNum) === 0
console.log(result)

result =  Number(segundoNum) % Number(primeiroNum) === 0
console.log(result)
*/

