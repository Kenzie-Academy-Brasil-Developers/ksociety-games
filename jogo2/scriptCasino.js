// CASSINO

const numeros = [1,2,3,4,5,6,7,8,9]
let count = 0;
let vitorias = 0;
let derrotas = 0;

function slot(){
    const som = new Audio('./slot-sound.mp3')
    som.play()
    document.getElementById('start').removeAttribute("onclick");

    const cassino = setInterval(function(){
        count++

        let mostraVitorais = document.getElementById('vitorias');


        let esquerda = Math.floor(Math.random() *9)
        let centro = Math.floor(Math.random() *9)
        let direita = Math.floor(Math.random() *9)

        let slotMeio = document.getElementById('slot-esqueda')
        slotMeio.firstElementChild.src = './../slot/'+esquerda+'.png'
        let slotCentro = document.getElementById('slot-centro')
        slotCentro.firstElementChild.src = './../slot/'+centro+'.png'
        let slotDireita = document.getElementById('slot-direita')
        slotDireita.firstElementChild.src = './../slot/'+direita+'.png'

        if(count > 29){
            let finalEsquerda = numeros[esquerda]
            slotMeio.firstElementChild.src = './../slot/'+finalEsquerda+'.png'
            let finalCentro = numeros[centro]
            slotCentro.firstElementChild.src = './../slot/'+finalCentro+'.png'
            let finalDireita = numeros[direita]
            slotDireita.firstElementChild.src = './../slot/'+finalDireita+'.png'

            if((finalEsquerda===finalDireita)&&(finalEsquerda===finalCentro)&&(finalDireita===finalCentro)){
                document.getElementById('result').innerText = 'Você acertou as 3 posições e ganhou 1 ponto!'
                vitorias++;
                mostraVitorais.innerText = `score: ${vitorias}`
            }
            else if((finalEsquerda===finalCentro) || (finalEsquerda===finalDireita) || (finalDireita===finalCentro)){
                document.getElementById('result').innerText = 'Você acertou 2 posições e ganhou 0.5 ponto!'
                vitorias+= 0.5;
                mostraVitorais.innerText = `score: ${vitorias}`
            }else{
                document.getElementById('result').innerText = 'Você perdeu, tente novamente'
                
                //mostraDerrotas.innerText = `Derrotas: ${derrotas}`
            }
            document.getElementById('start').setAttribute("onclick","slot()");
            count = 0;
            clearInterval(cassino)
        }
    },100)
}
