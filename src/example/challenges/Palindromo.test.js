import { Palindromo } from "./Palindromo";

describe("Testando validação de palindromo", () => {
    
    test("Palavra palidroma com resposta positiva 'S'",()=>{
        var esperado = "S",palavra_validacao = "anilina";
        expect(Palindromo.valida(palavra_validacao)).toEqual(esperado);
    });

    test("Palavra Não palidroma com resposta positiva 'N'",()=>{
        var esperado = "N",palavra_validacao = "mama";
        expect(Palindromo.valida(palavra_validacao)).toEqual(esperado);
    });

    test("Palavara pequena <= 2 caracteres seja validada com '?'",()=>{
        var esperado = "?", palavra_validacao = "mm";
        expect(Palindromo.valida(palavra_validacao)).toEqual(esperado);
    });

    test("Texto palindromo retorno 'S'",()=>{
        var esperado = "S", palavra_validacao = "socorram me subi no on ibus em marrocos";
        expect(Palindromo.valida(palavra_validacao)).toEqual(esperado);
    });

});