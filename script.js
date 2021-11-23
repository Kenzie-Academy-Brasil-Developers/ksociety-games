palavrasArr ['Teste','Comida','Fruta','Arvore','Casa']

function criaLetras(){
    let result = '';
    let numero = 0;
    let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let cont = parseInt(Math.random() * (10 - 1) + 1)

    numero = Math.floor(Math.random() * (26 - 0) + 0)

    return letras[numero]
}

function criaTabela(){
    let arr = []
    for(let linha=0;linha<10;linha++){
        
        arr.push([])
        arr[linha].push(new Array(10));
        for(let coluna=0;coluna<10;coluna++){
            arr[linha][coluna] = criaLetras()
        }
    }
    console.log(arr)
}

function renderizaTabela(letra){
    const divCentro = document.getElementById('centro')
    const tableCentro = document.createElement('table')

    for(let i=0;i<10;i++){
        const trCentro = document.createElement('tr')
        for(let j=0;j<10;j++){
            const thCentro = document.createElement('th')
            thCentro.innerText = criaLetras()
            trCentro.appendChild(thCentro)
        }
        tableCentro.appendChild(trCentro)
    }
    divCentro.appendChild(tableCentro)



}