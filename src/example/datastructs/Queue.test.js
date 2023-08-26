import { Node, Queue } from "./Queue.js";

var queue = undefined;

beforeAll(() => {
    queue = new Queue();
});

describe("Teste operações de Fila", () => {

    test("Teste objeto contruído", () => {
        expect(queue.size).toEqual(0);
        expect(queue._first).toBe(null);
        expect(queue._last).toBe(null);
    });

    test("Test enqueue some value", () => {
        var esperado = 10, size = 1;
        console.log("########## ENQUEUE VALUE 10 ##########");
        queue.enqueue(esperado);
        expect(queue.size).toEqual(size);
        expect(queue.peek()).toEqual(esperado);
        expect(queue._first.next).toBe(null);
        expect(queue._last.next).toBe(null);
    });

    test("Test enqueue another value", () => {
        var esperado_first = 10, esperado_last = 20, size = 2;
        console.log("########## ENQUEUE VALUE 20 ##########");
        queue.enqueue(esperado_last);
        console.log(queue);
        expect(queue.size).toEqual(size);
        expect(queue.showLast()).toEqual(esperado_last);
        expect(queue._first.next).toBe(null);
        expect(queue._first.data).toBe(esperado_first);
        expect(queue._last.next._data).toBe(esperado_first);


    });

    test("Dequeu some value first time", () => {
        var esperado_first = 10, esperado_last = 20, size = 1, resultado = undefined;
        console.log("########## DEQUEUE VALUE 10 ##########");
        resultado = queue.dequeue()._data;
        expect(queue.size).toEqual(size);
        expect(queue._last._data).toEqual(esperado_last);
        expect(resultado).toEqual(esperado_first);

    });

});