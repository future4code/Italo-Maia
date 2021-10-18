/* Exercícios de interpretação de código

Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.
Leia o código abaixo

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

a) O que vai ser impresso no console?
10
b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
50

2/ LEIA O CODIGO ABAIXO
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
a. Explique o que essa função faz e qual é sua utilidade

ESTA FUNÇÃO TEM COMO OBJETIVO PEGAR O TEXTO DO USUÁRIO E TRANSFORMÁLO EM MAIÚSCULO E DEPOIS PROCURAR A PALAVRA "CENOURA" DENTRO DO TEXTO.

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura`
     ii.  `CENOURA é bom pra vista`
     iii. `Cenouras crescem na terra`
*/






/*
EXERCÍCIOS DE ESCRITA DE CÓDIGO

Escreva as funções explicadas abaixo:

a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:
"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.
*/

/*let array = ["Eu sou ITALO, tenho 20 anos, moro em Minas Gerais e sou estudante."]
function sobremim(){
    console.log(array)
}
sobremim(array)*/


/*b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].*/
/*let meuNome = "Italo Maia"
let minhaidade = 20
let minhacidade = "Contagem"
let profissão = " Estudante"
function sobremim2() {
    console.log("Eu sou", meuNome, "moro em",  minhacidade, "tenho", minhaidade,"e sou",profissão)
}
sobremim2(meuNome,minhacidade,minhaidade,profissão)*/

/* 2 Escreva as funções explicadas abaixo:
a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.*/

/*function somarosnumeros(numero1, numero2) {
const resultadofuncao = numero1 + numero2
return resultadofuncao
}
const resultadofuncao = somarosnumeros(10, 20)
console.log(resultadofuncao) 



//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.

function somarosnumeros(numero1, numero2) {
    const resultadofuncao = numero1 >= numero2
    return resultadofuncao
    }
    const resultadofuncao = somarosnumeros(10, 20)
    console.log(resultadofuncao)
    


//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não


function descobrirSeEPar(numerobooleano) {
    const resultadodapergunta = numerobooleano % 2 === 0
    return resultadodapergunta
}
resultadodapergunta = descobrirSeEPar(100)
console.log(resultadodapergunta)


//d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

const text = ("O Italo Maia é um cheiroso")
 function mensagem(enunciado) {
console.log(enunciado.lenght)
console.log(enunciado.toUpperCase())
 }
 mensagem(text)

    /*toLowerCase(), texto.lenght)
 console.log(resultadodoquepede)    

/*
3 Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
Números inseridos: 30 e 3
Soma: 33
Diferença: 27
Multiplicação: 90
Divisão: 10


const numerotrinta = prompt("INSIRA O PRIMEIRO NUMERO")

const numero = prompt("INSIRA O SEGUNDO NUMERO")

function operacoes(soma, divisao, subtracao, multiplicação){
    console.log(Number(numero) + Number(numerotrinta))
    console.log(Number(numerotrinta) / Number(numero) )
    console.log(Number(numerotrinta) - Number(numero) )
    console.log(Number(numerotrinta) * Number(numero) )
}
operacoes(numerotrinta, numero)

/*function operacoes(soma, divisao, subtracao, multiplicação){
    console.log(Number(numero) / Number(numerotrinta))
}
operacoes(numerotrinta, numero)*/

 