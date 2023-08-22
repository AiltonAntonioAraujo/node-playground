function bubbleSort(array){
    let q = 0;
    let trocou=false;
    for (let x=0; x<array.length; x++){
        for(let y=0; y<array.length-x-1; y++){
            //verifica se o valor for maior
            if(array[y] > array[y+1]){
                let temp = array[y];
                array[y] = array[y+1];
                array[y+1] = temp;
                q++;
                trocou=true;
            }
        }
        if(!trocou){
            break;
        }
    }
    console.log("quantidade de execuções: "+q);
    return array;
}

export {
    bubbleSort
};

