/*
Classe executa a formula de fibonacci de 
forma recursiva
*/

export class Fibonnaci{
        constructor(){
           
        }

         static getSum(numero){
            if(numero == 0 || numero == 1)
                return numero
            else return this.getSum(numero -1) + this.getSum(numero -2);
            
        }
}