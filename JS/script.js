const mario = document.querySelector('.mario')
const cano = document.querySelector('.cano')

const pular = () => {
    mario.classList.add('pular')

    setTimeout(() => {
        
        mario.classList.remove('pular')

    } ,500)
}

const loop = setInterval(() => {

    const canoPosicao = cano.offsetLeft
    const marioPosicao = +window.getComputedStyle(mario).bottom.replace('px', '')

    if (canoPosicao <= 120 && canoPosicao > 0 && marioPosicao <110) {

        cano.style.animation = 'nome'
        cano.style.left = `${canoPosicao}px`

        mario.style.animation = 'nome'
        mario.style.bottom = `${marioPosicao}px`

        mario.src = './imagens/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)

    }

}, 10)

document.addEventListener('keydown', pular)