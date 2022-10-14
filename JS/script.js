const mario = document.querySelector('.mario')
const cano = document.querySelector('.cano')
const perdeu = document.querySelector(".perdeu")
const nuvens = document.querySelector('.nuvens')

const pular = () => {
    mario.classList.add('pular')

    setTimeout(() => {
        
        mario.classList.remove('pular')

    } ,500)
}

const loop = setInterval(() => {

    const canoPosicao = cano.offsetLeft
    const marioPosicao = +window.getComputedStyle(mario).bottom.replace('px', '')
    const nuvensPosicao = nuvens.offsetLeft

    if (canoPosicao <= 120 && canoPosicao > 0 && marioPosicao <110) {

        cano.style.animation = 'none'
        cano.style.left = `${canoPosicao}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosicao}px`

        mario.src = './imagens/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        nuvens.style.animation = 'none'
        nuvens.style.left = `${nuvensPosicao}px`

        perdeu.textContent = 'Game Over'

        clearInterval(loop)

    }

}, 10)

document.addEventListener('keydown', pular)