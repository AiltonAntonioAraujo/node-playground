import { FontesDeDados, FonteArquivo } from "./FonteArquivo.js";

let arq = new FonteArquivo("../../../estudantes.csv");

while(arq.possuiDados()){
    console.log(arq.proximoDado());
}
