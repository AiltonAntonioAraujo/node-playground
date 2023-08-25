/*
Classe que valida se uma palavra é palíndromo
por Exemplo: anilina e escrita da mesma forma
se for invertida
*/

export class Palindromo{

    static valida(palavra){
        
        var reverse = Palindromo.reverse(palavra);//.split("").reverse().join("");
        console.log("Reverse:"+reverse);

        if(palavra != null && palavra.length > 2){
            if(palavra === reverse){
                return "S";
            }else return "N"
        } else return "?";     
    }

    static reverse(palavra){
        var aux ="";
        for(var i=palavra.length -1; i >= 0; i--){
            aux = aux + palavra[i];
        }
        return aux;
    }
}