/*

// GERA AS LETRAS ALEATÓRIAS
function criaLetras(){
    let numero = 0;
    let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    numero = Math.floor(Math.random() * 26)

    return letras[numero]
}



// CRIA UM ARRAY 10X10 E ADICIONA AS LETRAS (criaLetras) EM CADA POSIÇÃO
let cont = 0;
function criaTabela(){
    let arr = []    
    for(let linha=0;linha<10;linha++){
        arr.push([])
        arr[linha].push(new Array(10));
        for(let coluna=0;coluna<10;coluna++){
            arr[linha][coluna] = criaLetras()
        }
    }
    return renderizaTabela(arr)
}

*/

// CRIA A TABELA NO HTML E ADICIONA AS LETRAS ALEATÓRIAS NAS POSIÇÕES DA TABELA


// CASSINO

const numeros = [1,2,3,4,5,6,7,8,9]
let count = 0;

function slot(){
    const random = setInterval(function(){
        count++

        let esquerda = Math.floor(Math.random() *10)
        let centro = Math.floor(Math.random() *10)
        let direita = Math.floor(Math.random() *10)

        let slotMeio = document.getElementById('slot-esqueda').innerHTML = esquerda
        let slotCentro = document.getElementById
        document.centro = numeros[centro]
        document.direita = numeros[direita]

        if(count > 5){
            let finalEsquerda = numeros[esquerda]
            let finalCentro = numeros[centro]
            let finalDireita = numeros[direita]

            if((finalEsquerda===finalCentro) || (finalEsquerda===finalDireita) || (finalDireita===finalCentro)){
                document.getElementById('result').innerText = 'olá'
            }
        }
    },100)
}
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

        return renderizaTabela(matrix);

}
const botao = document.getElementById('reset')
function renderizaTabela(matrix){
    const divCentro = document.getElementById('centro')
    const tableCentro = document.createElement('table')

    divCentro.innerHTML = ''
    
    for(let i=0;i<10;i++){
        const trCentro = document.createElement('tr')
        for(let j=0;j<10;j++){
            const thCentro = document.createElement('td')
            thCentro.innerText = matrix[i][j]
            trCentro.appendChild(thCentro)
        }
        tableCentro.appendChild(trCentro)
    }
    divCentro.appendChild(tableCentro)
}

function resetTabela(){
    botao.addEventListener('click',function(){
        criarValoresNaMatriz(matrix);
        addTresPalavrasNaMatriz(palavras, matrix)
    })
}

criarValoresNaMatriz(matrix);
resetTabela();

console.table(addTresPalavrasNaMatriz(palavras, matrix));