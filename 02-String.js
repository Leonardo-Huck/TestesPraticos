/*2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula,
 além de informar a quantidade de vezes em que ela ocorre.

    IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;*/

const prompt = require('prompt-sync')();

console.log('\n------------ Verificação do char a na string ------------\n');

let entrada = prompt('Informe uma string para verificação: ');

let regex = /[aA]/g;
let match = entrada.match(regex);

if (match) {
    console.log(`A letra 'a/A' aparece ${match.length} vezes na string.`);
} else {
    console.log("A letra 'a/A' não foi encontrada na string.");
}
