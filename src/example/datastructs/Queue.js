/*
Algoritimo de implementação de uma fila
*/

export class Node {
    constructor(data) {
        this._data = data;
        this._next = null;
    }
    get next() {
        return this._next;
    }

    set next(value) {
        this._next = value;
    }

    get data() {
        return this._data;
    }
}

export class Queue {

    constructor(data = undefined) {
        if (data === undefined) {
            this._first = null;
            this._last = null;

        } else {
            this.enqueue(data);
        }
        this._size = 0;

    }

    enqueue(data) {
        let node = new Node(data);
        if (this.empty) {
            this._first = node;
            this._last = node;
        } else {
            let current = this._last;
            this._last = node;
            this._last.next = current;
        }
        this._size++;
    }

    dequeue() {
        let node;
        if (this.empty) {
            return node;
        } else if (this._size == 1) {
            this._last = null;
            this._first = null;
        } else {
            node = this._first;
            let current = this._last;
            let previous = undefined;
            while (current.next) {
                previous = current;
                current = current.next;
            }
            if (previous._data != undefined) {

                this._first = previous;
                this._first.next = null;

            }
        }
        this._size--;
        return node;
    }

    showAll() {
        output = "";
        if (this.empty) {
            return output;
        } else {
            current = this._last;
            output = "[" + current._data;
            while (current.next) {
                current = current.next;
                output = "," + current._data;
            }
            output = "]";
        }
        return output;

    }

    showLast() {
        return this._last.data;

    }
    peek() {
        return this._first.data;

    }


    get empty() {
        return this._size === 0;
    }


    get size() {
        return this._size;
    }

}