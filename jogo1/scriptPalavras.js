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
    
    const offset = Math.floor((1+10-palavra.length)*Math.random())
    console.log('offset'+offset);
    for(let i = 0; i < palavra.length; i++){
        if(i+offset<10)
        matrix[linha][i+offset] = palavra[i].toUpperCase();
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

let counter = 0;

function resetTabela(){
    botao.addEventListener('click',function(){
        criarValoresNaMatriz(matrix);
        addTresPalavrasNaMatriz(palavras, matrix)
        // REMOVE AS PALAVRAS DA BOX DE ENCONTRADOS
        const div = document.getElementById('encontrados')
        div.innerHTML = ''
        counter = 0;
    })
}

const nomeJogador = document.getElementById('name');
const botaoEnviarNome = document.getElementById('enviarNome');
let nomeDoInput = '';

function buscarNomeJogador(){

    botaoEnviarNome.addEventListener('click', function(){
        console.log(nomeJogador.value);
        nomeDoInput = nomeJogador.value;
    })
}

buscarNomeJogador();

const botaoPesquisar = document.getElementById('pesquisar');
const entrada = document.getElementById('word');


/**Função que verifica se a palavra digitada pelo usuário está no caça-palavras
 * e, caso sim, retorna uma mensagem alertando que uma palavra foi encontrada
 * e ao encontrar todas, alerta o fato de que todas foram encontradas e pede que faça reset
 */
function pesquisaPalavra(){
    botaoPesquisar.addEventListener('click', function(){

        let search = entrada.value;
        let posicao = palavrasDaMatrix.indexOf(search.toUpperCase());
        console.log(posicao);
        if(palavrasDaMatrix.includes(search.toUpperCase())){
            palavrasDaMatrix.splice(posicao, 1);
            counter++;  
            if(counter < 3){
                alert("Parabéns, achou uma palavra!");
                palavrasEcontradas(search)
                entrada.value = "";
            } else {
                alert(`Parabéns, ${nomeDoInput}, você achou todas as palavras! Clique em reset para jogar de novo!`);
                palavrasEcontradas(search)
                entrada.value = ""
                counter = 0;
            }
        }
        
        console.log(palavrasDaMatrix);
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

/*

// TIMER CAÇA PALAVRAS

function timer(){
    stop = false;
    
    let contTimer = 0
    let min = 0;
    const timer = document.getElementById('timer')
    setInterval(function(){
        contTimer++
        
        if(contTimer===60){
            contTimer = 0
            min++
            timer.innerText = '0'+min+':0'+(contTimer)
        }else if(contTimer>9){
            timer.innerText = '0'+min+':'+(contTimer)
        }else{
            timer.innerText = '0'+min+':0'+(contTimer)
        }

        if(stop===true){
            clearInterval(timer)
            timer.innerText = '00:00'
        }
    },1000)
}

*/



// TOGGLE NAME ESCONDE A BARA DE NOME
function toggleName() {
    var x = document.getElementById("toggle");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

criarValoresNaMatriz(matrix);
resetTabela();
pesquisaPalavra();
console.log(palavrasDaMatrix);
console.table(addTresPalavrasNaMatriz(palavras, matrix));

document.addEventListener("keypress", function(e){
    if(e.key === 'Enter'){
        let search = entrada.value;
        let posicao = palavrasDaMatrix.indexOf(search.toUpperCase());
        console.log(posicao);
        if(palavrasDaMatrix.includes(search.toUpperCase())){
            palavrasDaMatrix.splice(posicao, 1);
            counter++;  
            if(counter < 3){
                alert("Parabéns, achou uma palavra!");
                palavrasEcontradas(search)
                entrada.value = "";
            } else {
                alert(`Parabéns, ${nomeDoInput}, você achou todas as palavras! Clique em reset para jogar de novo!`);
                palavrasEcontradas(search)
                entrada.value = "";
                counter = 0;
            }
        }
    }
})

function apareceTudo(){
    
    const centro1 = document.getElementById('centro')
    centro1.style.display = 'block'
}

botaoTimer = document.getElementById('enviarNome')
botaoTimer.addEventListener('click',apareceTudo)
