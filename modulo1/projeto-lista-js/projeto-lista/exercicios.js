// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}


// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt("Insira a Altura")
  const largura = prompt("Insira largura")
  const multiplicacao = altura * largura
  console.log(multiplicacao)
}
calculaAreaRetangulo()

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt("Insira o ano atual")
  const anoDeNascimento = prompt("Insira seu ano de nascimento")
  const idade = anoAtual - anoDeNascimento
  console.log(idade)
}
imprimeIdade()

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura)
return imc
}
calculaIMC()

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nomeUsuario = prompt("Informe seu nome")
  const idadeUsuario = prompt("Informe sua idade")
  const emaill = prompt("Insira seu email")
  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emaill}.`)
}
  imprimeInformacoesUsuario() 

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
    const primeiraCor = prompt("INSIRA AQUI SUA COR FAVORITA")
    const segundaCor = prompt("INSIRA AQUI SUA COR FAVORITA")
    const terceiraCor = prompt("INSIRA AQUI SUA COR FAVORITA")
    const tresjuntas = [primeiraCor, segundaCor, terceiraCor]
    
  console.log(tresjuntas)
}
imprimeTresCoresFavoritas() 

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  let maiu = string.toUpperCase()
return maiu
}
retornaStringEmMaiuscula()

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const resultado = string1.length === string2.length
  return resultado

}
checaStringsMesmoTamanho()
// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}