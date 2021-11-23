let matrix = [];

//Cria uma matriz 10x10 
for(let i = 0; i < 10; i++){
    matrix[i] = [];
}

//Adiciona letras aleatórias na matriz
function criarValoresNaMatriz(matrix){
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            matrix[i][j] = (Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1).toLocaleUpperCase());
        }
    }
    return matrix;
}   

const palavras = ['css', 'kenzie', 'programa', 'objeto', 'variavel', 'dev', 'hacker',
 'mobile', 'array', 'software', 'notebook', 'ubuntu', 'linux', 'google', 'terminal', 'algoritmo',
'matrix', 'slack', 'html', 'codewars'];

function addPalavrasNaMatrizHorizontal(palavra, matrix, linha){
    
    for(let i = 0; i < palavra.length; i++){

        matrix[linha][i] = palavra[i].toUpperCase();

    }

    return matrix;

}


function addTresPalavrasNaMatriz(palavras, matrix){

        let aleatorio2 = 0;
        let aleatorio3 = 0;

        let aleatorio1 = Math.floor(Math.random() * (19 - 0 + 1));

        do{
            aleatorio2 = Math.floor(Math.random() * (19 - 0 + 1));
        } while(aleatorio1 === aleatorio2);

        do{
            aleatorio3 = Math.floor(Math.random() * (19 - 0 + 1));
        } while(aleatorio3 === aleatorio2 || aleatorio3 === aleatorio1);

        let linha2 = 0;
        let linha3 = 0;

        let linha1 = Math.floor(Math.random() * (9 - 0 + 1));

        do{
            linha2 = Math.floor(Math.random() * (9 - 0 + 1));
        } while(linha1 === linha2);

        do{
            linha3 = Math.floor(Math.random() * (9 - 0 + 1));
        } while(linha3 === linha2 || linha3 === linha1);


        console.log(aleatorio1);
        console.log(aleatorio2);
        console.log(aleatorio3);

        console.log(linha1);
        console.log(linha2);
        console.log(linha3);

        addPalavrasNaMatrizHorizontal(palavras[aleatorio1], matrix, linha1);
        addPalavrasNaMatrizHorizontal(palavras[aleatorio2], matrix, linha2);
        addPalavrasNaMatrizHorizontal(palavras[aleatorio3], matrix, linha3);

        return matrix;

}

criarValoresNaMatriz(matrix);
console.table(addTresPalavrasNaMatriz(palavras, matrix));

console.log(matrix.length);