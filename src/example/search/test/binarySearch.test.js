/*
*  Aplicação realiza a busca binária por um elemento de um array de inteiros
*/
import binarySearch from "../binarySearch.js";

var array = [];

beforeAll(() => {
    array = binarySearch.initialize(10);
});

describe('Verificando a incialização', () => {
    test('Array contem de 1 a X elementos', () => {
        expect(array.length > 0 && array.length <= 10).toBe(true);
    });

});