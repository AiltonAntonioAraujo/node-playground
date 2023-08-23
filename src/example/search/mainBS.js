/*
*  Aplicação realiza a busca binária por um elemento de um array de inteiros
*/
import binarySearch from "./binarySearch.js";

/*
* Cria uma array especificado com X elementos especificados
*/
var array = binarySearch.initialize(5);
var wantedValue = 0;

console.log("Array Sorteado: " + array);

if (binarySearch.search(array, wantedValue) >= 0) {
    console.log("Array Sorteado em Ordem: " + array);
    console.log("Valor: " + wantedValue + " encontrado do array!");
} else {
    console.log("Valor: " + wantedValue + " NÃO encontrado do array!");
}

console.log("Array Ordenado: " + array);