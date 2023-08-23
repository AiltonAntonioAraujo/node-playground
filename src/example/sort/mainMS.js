import ms from "./mergeSort.js";

//Array especificado
var arr = [14, 7, 3, 12, 9, 11, 6, 2];

//Antes da ordenação
console.log("Antes:" + arr);

//Após ordenação
ms.mergeSort(arr);
console.log("Depois:" + arr);