/*
Teste Unitário da classe FonteArquivo
*/
import mock from 'mock-fs';
import { FontesDeDados, FonteArquivo } from "../FonteArquivo.js";

describe("Teste de leitura de arquivo", () => {
    beforeAll(() => {
        mock({
            'src/example/challenges/test': {
                'index.md': '# Hello world!',
            },
        });
    });

    afterAll(() => {
        mock.restore();
    });

    test("Abrir arquivo para leitura", () => {
        let result = new FonteArquivo("src/example/challenges/test/index.md");
        const expectedResult = `# Hello world!`;
        expect(result.getData()[0]).toEqual(expectedResult);
    });

});




