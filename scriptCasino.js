
// CRIA A TABELA NO HTML E ADICIONA AS LETRAS ALEATÓRIAS NAS POSIÇÕES DA TABELA

const numeros = [1,2,3,4,5,6,7,8,9]
let count = 0;

function slot(){
    const random = setInterval(function(){
        count++

        let esquerda = Math.floor(Math.random() *10)
        let centro = Math.floor(Math.random() *10)
        let direita = Math.floor(Math.random() *10)
        //
        let slotMeio = document.getElementById('slot-esqueda')
        slotMeio.firstElementChild.innerHTML = esquerda
        let slotCentro = document.getElementById('slot-centro')
        slotCentro.firstElementChild.innerHTML = centro
        let slotDireita = document.getElementById('slot-direita')
        slotDireita.firstElementChild.innerHTML = direita

        if(count > 20){
            let finalEsquerda = numeros[esquerda]
            let finalCentro = numeros[centro]
            let finalDireita = numeros[direita]

            if((finalEsquerda===finalDireita)&&(finalEsquerda===finalCentro)&&(finalDireita===finalCentro)){
                document.getElementById('result').innerText = 'Você acertou as 3 posições e ganhou!'
            }
            else if((finalEsquerda===finalCentro) || (finalEsquerda===finalDireita) || (finalDireita===finalCentro)){
                document.getElementById('result').innerText = 'Você acertou 2 posições e ganhou metade do premio!'
            }else{
                document.getElementById('result').innerText = 'Você perdeu, tente novamente'
            }
            count = 0;
            clearInterval(random)
        }
    },100)
}