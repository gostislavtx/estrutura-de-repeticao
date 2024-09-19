const prompt = require('prompt-sync')();

var numTabuada = parseFloat(prompt("Digite o número para fazer a tabuada: "));
var numInicio = parseFloat(prompt("Digite um número incial: "));
var numFinal = parseFloat(prompt("Digite um número final: "));

for (let i = numInicio; i <= numFinal; i++) {
    console.log(`${numTabuada} x ${i} = ${numTabuada * i}`);
}