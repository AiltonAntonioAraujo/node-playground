/*
* Lendo um arquivo do sistema de arquivos
*/
import fs from 'fs'

export class FontesDeDados {

    constructor(endereco) {
        this.endereco = endereco

    }

}

export class FonteArquivo extends FontesDeDados {
    constructor(endereco) {
        super(endereco);
        this.data = "";
        this.current = 0;
        this.higher = 0;

        try {
            this.data = fs.readFileSync(this.endereco, 'utf8').split("\r");
            this.higher = this.data.length - 1;
            console.log("File Open!");
        } catch (err) {
            throw err;
            console.error(err);
        }

    }


    possuiDados() {
        if (this.data != null && this.data.length > 0 && this.current < this.data.length)
            return true
        else return false;
    }

    proximoDado() {
        return this.data[this.current++];
    }

    getData() {
        return this.data;

    }

}
