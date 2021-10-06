
/*1 - Indique todas as mensagens impressas no console, SEM EXECUTAR o programa. 
let array
console.log('a. ', array) 
 // RESPOSTA: undefined
array = null
console.log('b. ', array)
 // RESPOSTA:null 
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
 // RESPOSTA: 11
let i = 0
console.log('d. ', array[i])
 // RESPOSTA: 3
array[i+1] = 19
console.log('e. ', array)
 // RESPOSTA: (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const valor = array[i+6]
console.log('f. ', valor) 
 // RESPOSTA: 9 */

 /*2 Leia o código abaixo com atenção
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"? 
// RESPOSTA: SUBI NUM ÔNIBUS EM MIRROCOS 27


/* Exercícios de escrita de código
1 - Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem;
O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario! */

const nome = prompt("Informe seu nome!")
const email = prompt("Por favor, informe o seu e-mail!")
console.log("O e-mail", email, "foi cadastrado com sucesso. Seja bem-vinda(o)", nome, "!")

/* 2- Faça 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
    a) Imprima no console o array completo
    
    b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista */

    const CincoComidasPreferidas = ["Arroz", "Feijão", "Cenoura", "Macarrão", "Pimenta"]
    console.log("Essas são as minhas comidas preferidas:")
    console.log(CincoComidasPreferidas[0])
    console.log(CincoComidasPreferidas[1])
    console.log(CincoComidasPreferidas[2])
    console.log(CincoComidasPreferidas[3])
    console.log(CincoComidasPreferidas[4]) 

    /* 3-Faça um programa, seguindo os passos:
    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    c) Imprima o array no console
    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2
    e) Remova da lista o item de índice que o usuário escolheu.
    f) Imprima o array no console */
    const listaDeTarefas = []
    const primeira = prompt("Insira a primeira tarefa")
    const segundatarfea = prompt("Insira a segunda tarefa")
    const terceira = prompt("Inira a terceira tarefa")
    listaDeTarefas.push(primeira, segundatarfea, terceira)
    console.log(listaDeTarefas)
    const tarefajafeita = prompt("Digite a tarefa que voce já fez! sendo a primeira = 0; a segunda = 1 e por fim a terceira = 2. DIGITE 0, 1 OU 2")
    listaDeTarefas.splice(tarefajafeita, 1)
    console.log(listaDeTarefas)