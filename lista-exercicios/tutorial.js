const prompt = require ('prompt-sync')();

const nome = prompt('Qual o seu nome?')
const idade = prompt("Qual a sua idade?")
const curso = prompt("Qual o seu curso?")
const notaA1 = prompt("Qual a nota A1")
const notaA2 = prompt("Qual a nota A2")

console.log(`Olá ${nome},seu curso é ${curso}`)
// console.log("Olá " + nome + " seu curso é" + curso)

if(idade >= 18) {
    console.log("Você já é maior de idade")
} else {
    console.log("Você ainda é menor de idade")
}

// console.log(notaA1 + notaA2)

const notaA1num = Number(notaA1)
const notaA2num = Number(notaA2)

const media = (notaA1num + notaA2num) / 2

console.log("Média: " + media)

if (media >= 7){
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}
