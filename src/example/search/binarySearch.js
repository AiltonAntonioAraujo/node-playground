/*
* Algoritmo que realiza a implementação da busca binária
*/

function searchWithBinarySearch(array, begin, end, wantedValue) {
    //inicializa o elemento do meio
    var middle = getMiddleElement(begin, end);
    var contador = 0;
    while (end > begin) {
        if (wantedValue == array[middle]) {
            return middle;
        } else if (wantedValue < array[middle]) {
            end = middle--;
        } else {
            begin = middle++;
        }
        middle = getMiddleElement(begin, end);
    }
    //Não localizou o valor de wantedValue,
    // retorna valor negativo fora do range
    if (end <= begin) {
        middle = -1;
    }
    return middle;

}

function getMiddleElement(begin, end) {
    return Math.floor((begin + end) / 2);
}

function search(array, wantedValue) {
    // Antes de realizar a busca binária é necessário que o array esteje ordenado
    array.sort();
    return searchWithBinarySearch(array, 0, array.length - 1, wantedValue);
}

function initialize(elements) {
    return Array.from(new Set(Array.from({ length: elements }, () => Math.floor(Math.random() * elements))));
}

export default {
    search, initialize
}

