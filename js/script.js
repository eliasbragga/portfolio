const mario = document.querySelector('.mario')
const cano = document.querySelector('.cano')
const nuvem = document.querySelector('.nuvens')
const audio = document.querySelector('.audio')
const botao = document.querySelector('#button')
const gameBody = document.querySelector('#game-body')
const textoH2 = document.querySelector('.h2Mario')
const textAreaLoser = document.querySelector('#divTextoLoser')

// Super Mario
const jump = () => {
    audio.src ='/audio/som do Mário pulando.mp3'
    mario.classList.add('jump')
    cano.classList.add('animacaoCano')
    nuvem.classList.add('aniamcaoNuvens')
    textoH2.style.display = 'none'
    


    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => { 

    const canoPosition = cano.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    const nuvemPosition = nuvem.offsetLeft
    if (canoPosition <= 100 && canoPosition > 0 && marioPosition < 87) {        
        cano.style.animation = 'none'
        cano.style.left = `${canoPosition}px`
        nuvem.style.animation = 'none'
        nuvem.style.left = `${nuvemPosition}px`
        
        textAreaLoser.style.visibility = 'visible'
       

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`
        mario.src = '/img/mario-over.png'
        mario.style.width = '80px'
        mario.style.marginLeft = '50px'
        audio.src=''

        botao.style.visibility = 'visible'
        
        clearInterval(loop)

    }
}, 10)

// function reiniciar() {
//     mario.src = '/img/mario-y.gif'
//     mario.classList.add('jump')
//     cano.classList.add('cano')
//     cano.style.animation = 'loading-cano'
//     mario.style.animation = ''
// }

// botao.addEventListener('click', reiniciar)
document.addEventListener('keydown', jump)



// PROJETOS ////////////////////////////////////////////////////////////////////////////////////////////////

function info() {    
    const display = document.querySelector('#display')
    const obj=event.target
    
    
    display.innerHTML='Nome: ' + obj.dataset.nome+"<br>"
    display.innerHTML+='Desenvolvido por: ' + obj.dataset.autor+"<br>"
    display.innerHTML+='Descrição: ' + obj.dataset.descricao+"<br>"
    display.innerHTML+='Ferramentas utilizadas: ' + obj.dataset.linguagem+"<br>"

}

function saida(){    
    const display = document.querySelector('#display')

    display.innerHTML='Passe o mouse por cima de algum projeto para mais informações'
}


function iniciar(){ 
   

    document.getElementById('port').addEventListener('mouseover', info)
    document.getElementById('port').addEventListener('mouseout', saida)

    document.getElementById('cordel').addEventListener('mouseover', info)
    document.getElementById('cordel').addEventListener('mouseout', saida)

    document.getElementById('solive').addEventListener('mouseover', info)
    document.getElementById('solive').addEventListener('mouseout', saida)

    document.getElementById('make').addEventListener('mouseover', info)
    document.getElementById('make').addEventListener('mouseout', saida)

    document.getElementById('enarmonia').addEventListener('mouseover', info)
    document.getElementById('enarmonia').addEventListener('mouseout', saida)

    document.getElementById('android').addEventListener('mouseover', info)
    document.getElementById('android').addEventListener('mouseout', saida)
}



window.addEventListener('load', iniciar)




