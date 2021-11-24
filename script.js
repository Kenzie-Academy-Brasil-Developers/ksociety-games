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

const botaoReset = document.createElement('button')
botaoReset.innerText = 'Reset'

function renderizaTabela(arr){
    const divCentro = document.getElementById('centro')
    const tableCentro = document.createElement('table')
    
    const main = document.getElementsByTagName('main')[0]
    main.appendChild(botaoReset)
    divCentro.innerHTML = ''
    
    for(let i=0;i<10;i++){
        const trCentro = document.createElement('tr')
        for(let j=0;j<10;j++){
            const thCentro = document.createElement('td')
            thCentro.innerText = arr[i][j]
            trCentro.appendChild(thCentro)
        }
        tableCentro.appendChild(trCentro)
    }
    divCentro.appendChild(tableCentro)
    botaoReset.addEventListener('click',criaTabela)
}


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