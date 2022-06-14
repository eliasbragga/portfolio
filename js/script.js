const mario = document.querySelector('.mario')
const cano = document.querySelector('.cano')
// const nuvem = document.querySelector('.nuvens')
// const musica = document.querySelector('.musica')
const botao = document.querySelector('#button') 
const gameBody = document.querySelector('#game-body')
const textoH2 = document.querySelector('.h2Mario')
 

const jump = () => {
    mario.classList.add('jump')
    cano.classList.add('animacaoCano')
    textoH2.style.display = 'none'



    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {

    const canoPosition = cano.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    // const nuvemPosition = nuvem.offsetLeft
    if (canoPosition <= 100 && canoPosition > 0 && marioPosition < 87) {
        cano.style.animation = 'none'
        cano.style.left = `${canoPosition}px`
        
        
        


        // nuvem.style.animation = 'none'
        // nuvem.style.left = `$ {nuvemPosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`


        mario.src = '/img/mario-over.png'
        mario.style.width = '80px'
        mario.style.marginLeft = '50px'         
        botao.style.visibility='visible'
        
        
       
 
       

        // musica.src = "/sons/marioMorrendo.mp3"
        clearInterval(loop)
        
    }

}, 10)


function reiniciar(){
    mario.src = '/img/mario-y.gif'    
    mario.classList.add('jump')    
    cano.classList.add('cano')
    cano.style.animation='loading-cano' 
    mario.style.animation = ''
   
}


botao.addEventListener('click', reiniciar )
document.addEventListener('keydown', jump)
 

// Super Mario


 


