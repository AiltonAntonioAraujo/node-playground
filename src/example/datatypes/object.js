//array de dados
var nomes=['Ailton','Telma'];
console.log(nomes.length);

//Criando um objeto em JS
var servidor1 = {
    nome:'Ailton',
    idade: 40,
    salario: 12800,
    getDetalhes: function(){
        return this.nome +',  '+this.idade+', '+this.salario;
    }
};

var servidor2 = {
    nome:'Maria',
    idade: 55,
    salario: 15000
};

console.log(servidor1.getDetalhes());
console.log(aumentarSalario(servidor1, 1.1));
console.log(servidor2["nome"]);
console.log(aumentarSalario(servidor2, 1.05));

//Criando uma função
function aumentarSalario(servidor, aumento){
    return "Novo salario do servidor: "+servidor.nome+", Salario: "+(servidor.salario*aumento);
}


//Arrow functions
function multiplicar(x,y) {
    return x*y;
}

//(parametros) => { corpo da função }
var mult = (x,y) => {
    return x*y;
}

console.log(multiplicar(10,8));
console.log(mult(2,5));


// parce string to object 
var str = '{"nome":"Ailton", "idade": 40, "filhos":["Arthur", "Miguel"]}';
var obj = JSON.parse(str);
console.log(obj);

// converte object to JSON file

class Casa{
    constructor(nome, tipo, endereco, medidas){
        this.nome = nome,
        this.tipo = tipo,
        this.endereco = endereco,
        this.medidas = medidas
    }
}
 var objCasa = new Casa("VlRosa", "Terrea", "Cap. Alvaro Guimaraes", [12,33,162]);
 
 console.log(JSON.stringify(objCasa));
 
