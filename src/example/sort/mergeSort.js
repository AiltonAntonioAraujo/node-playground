/*
*  Implementa o algoritimo de ordenação dividir para conquistar
*  Merge Sort
*/

function getMiddleElement(begin, end) {
    return Math.floor((begin + end) / 2);
}

function merge(array, begin, end, middle) {

    var i = begin, j = middle + 1, k = begin, aux = array.slice();

    //junção da lista ordenada
    while (i <= middle && j <= end) {
        if (aux[i] < aux[j]) {
            array[k] = aux[i];
            i++;
        } else {
            array[k] = aux[j];
            j++;
        }
        k++;
    }
    //conclui a troca adicionando a direita
    while (i <= middle) {
        array[k] = aux[i];
        i++;
        k++;
    }
    //conclui a troca adicionando a esquerda
    while (j <= end) {
        array[k] = aux[j];
        j++;
        k++;
    }
}

function sortArrayOfIntWithMergeSort(array, begin, end) {

    if (Array.isArray(array) && begin < end) {
        var middle = getMiddleElement(begin, end);

        //Separa array lado esquerdo
        sortArrayOfIntWithMergeSort(array, begin, middle);
        //Separa array lado direito
        sortArrayOfIntWithMergeSort(array, middle + 1, end);

        merge(array, begin, end, middle);
    }

}

export default {
    mergeSort: function mergeSort(array) {
        sortArrayOfIntWithMergeSort(array, 0, array.length - 1, 0);
    }

}


