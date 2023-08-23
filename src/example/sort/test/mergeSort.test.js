import ms from "../mergeSort.js"

var array, esperado;

beforeAll(() => {
    array = [14, 7, 3, 12, 9, 11, 6, 2];
    esperado = [2, 3, 6, 7, 9, 11, 12, 14];
    ms.mergeSort(array);

});

describe('Verificando o array após ordenação:', () => {
    test('Array contem de 8 elementos', () => {
        expect(array.length > 0 && array.length == 8).toBe(true);
    });
    test('O array está em ordem crescente', () => {
        expect(array).toEqual(esperado);
    });

});