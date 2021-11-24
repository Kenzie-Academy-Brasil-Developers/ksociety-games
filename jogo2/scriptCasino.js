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