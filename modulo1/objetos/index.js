/* Exercícios de interpretação de código
 1/ Leia o código abaixo
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
 
A/ O que vai ser impresso no console?
"Matheus Nachtergaele", "Virginia Cavendish", canal: "Globo", horario: "14h".

2/ leia o código abaixo

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)


 A/ O que vai ser impresso no console?
{nome: 'Juca', idade: 3, raca: 'SRD'}
idade: 3
nome: "Juca"
raca: "SRD

{nome: 'Juba', idade: 3, raca: 'SRD'}
idade: 3
nome: "Juba"
raca: "SRD"

b/ O que faz a sintaxe dos três pontos antes do nome de um objeto?
Realiza uma cópia de um objeto (ou
array) inteiro.

3/ leia o código abaixo 
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

 A/ O que vai ser impresso no console?
  False e undefined

B/ Explique o valor impresso no console. Você sabe por que isso aconteceu? 
  A variavél pessoa não está definida na função. */


/*Exercícios de escrita de código
Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 
// Exemplo de entrada
const pessoa = {
   nome: "Amanda", 
   apelidos: ["Amandinha", "Mandinha", "Mandi"]
}

// Exemplo de saída
"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"


const pessoa = {
    nome : "Italo",
    apelidos : ["Itim", "Itulino", "Itão"]
    
}

 console.log("Eu sou o", pessoa.nome, "mas pode me chamar de:", pessoa.apelidos[0], ",", pessoa.apelidos[1], "ou", pessoa.apelidos[2], ".")


 //Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

 const mesmaPessoa = {...pessoa, apelidos : ["Italo Lindo","Italo Lindo", "Italo Lindo"]}
  console.log("Eu sou o", mesmaPessoa.nome, "mas pode me chamar de:", mesmaPessoa.apelidos[0], ",", mesmaPessoa.apelidos[1], "ou", mesmaPessoa.apelidos[2], ".")

                                      -----------------------------------

  Resolva os passos a seguir: 
  A/Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.
  B/Escreva uma função que receba esses objetos e retorne um array com as seguintes informações: */

 /* const sobreAlguem = {
      nome : "Italo",
      idade : 20,
      profissao : "Ser Bonito"
  }
  console.log(sobreAlguem.nome)
  console.log(sobreAlguem.nome.length)
console.log(sobreAlguem.idade) 
console.log(sobreAlguem.profissao)
console.log(sobreAlguem.profissao.length)

 // 3 Resolva os passos a seguir:
   A/Crie uma variável de escopo global que guarde um array vazio chamada carrinho */ 
   let carrinho = []

   const frutas = {
       Disponiveis: [
           {fruta1: "Kiwi", disponibilidade: "true"}, 
           {fruta2: "Uva", disponibilidade:  "true"}, 
           {fruta3: "Maça", disponibilidade: "true" }
           ]
   } 
   carrinho = frutas.Disponiveis
   console.log(carrinho)

