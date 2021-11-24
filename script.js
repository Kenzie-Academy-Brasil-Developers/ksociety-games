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
    const cassino = setInterval(function(){
        count++

        let esquerda = Math.floor(Math.random() *9)
        let centro = Math.floor(Math.random() *9)
        let direita = Math.floor(Math.random() *9)

        let slotMeio = document.getElementById('slot-esqueda')
        slotMeio.firstElementChild.src = '/slot/'+esquerda+'.png'
        let slotCentro = document.getElementById('slot-centro')
        slotCentro.firstElementChild.src = '/slot/'+centro+'.png'
        let slotDireita = document.getElementById('slot-direita')
        slotDireita.firstElementChild.src = '/slot/'+direita+'.png'

        if(count > 20){
            let finalEsquerda = numeros[esquerda]
            slotMeio.firstElementChild.src = '/slot/'+finalEsquerda+'.png'
            let finalCentro = numeros[centro]
            slotCentro.firstElementChild.src = '/slot/'+finalCentro+'.png'
            let finalDireita = numeros[direita]
            slotDireita.firstElementChild.src = '/slot/'+finalDireita+'.png'

            if((finalEsquerda===finalDireita)&&(finalEsquerda===finalCentro)&&(finalDireita===finalCentro)){
                document.getElementById('result').innerText = 'Você acertou as 3 posições e ganhou!'
            }
            else if((finalEsquerda===finalCentro) || (finalEsquerda===finalDireita) || (finalDireita===finalCentro)){
                document.getElementById('result').innerText = 'Você acertou 2 posições e ganhou metade do premio!'
            }else{
                document.getElementById('result').innerText = 'Você perdeu, tente novamente'
            }
            count = 0;
            clearInterval(cassino)
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

const palavrasDaMatrix = [];
const indicesDasLinhasDasPalavras = [];

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

        palavrasDaMatrix.push(palavras[aleatorio1].toUpperCase());
        palavrasDaMatrix.push(palavras[aleatorio2].toUpperCase());
        palavrasDaMatrix.push(palavras[aleatorio3].toUpperCase());

        indicesDasLinhasDasPalavras.push(linha1);
        indicesDasLinhasDasPalavras.push(linha2);
        indicesDasLinhasDasPalavras.push(linha3);

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
            const tdCentro = document.createElement('td')
            tdCentro.innerText = matrix[i][j]
            trCentro.appendChild(tdCentro)
        }
        tableCentro.appendChild(trCentro)
    }
    divCentro.appendChild(tableCentro)
}

function resetTabela(){
    botao.addEventListener('click',function(){
        criarValoresNaMatriz(matrix);
        addTresPalavrasNaMatriz(palavras, matrix)
        // REMOVE AS PALAVRAS DA BOX DE ENCONTRADOS
        const div = document.getElementById('encontrados')
        div.innerHTML = ''
    })
}

const botaoPesquisar = document.getElementById('pesquisar');
const entrada = document.getElementById('word');

let counter = 0;


/**Função que verifica se a palavra digitada pelo usuário está no caça-palavras
 * e, caso sim, retorna uma mensagem alertando que uma palavra foi encontrada
 * e ao encontrar todas, alerta o fato de que todas foram encontradas e pede que faça reset
 */
function pesquisaPalavra(){
    botaoPesquisar.addEventListener('click', function(){

        let search = entrada.value;
        console.log(search);

        let max = 0
        if(max>3){

        }

        if(palavrasDaMatrix.includes(search.toUpperCase())){
            counter++;  
            if(counter < 3){
                alert("Parabéns, achou uma palavra!");
                palavrasEcontradas(search)
            } else {
                alert("Parabéns, você achou todas as palavras! Clique em reset para jogar de novo");
                palavrasEcontradas(search)
                counter = 0;
            }   
        }
    })
}
// RETORNA AS PALAVRAS ENCONTRADAS
function palavrasEcontradas(x){
    const div = document.getElementById('encontrados')
    const p = document.createElement('p')
    p.classList.add('pEncontrado')

    p.innerText = x

    div.appendChild(p)
}


criarValoresNaMatriz(matrix);
resetTabela();
pesquisaPalavra();
console.log(palavrasDaMatrix);
console.table(addTresPalavrasNaMatriz(palavras, matrix));