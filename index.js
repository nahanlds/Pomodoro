const btnFoco = document.getElementById('foco');
const btnCurto = document.getElementById('curto');
const btnLongo = document.getElementById('longo');

const btns = document.querySelectorAll('button');
const btnComecar = document.getElementById('comecar');
const time = document.getElementById('time')


const body = document.body;

let tempoPrincipal = 1500;
let invalo = 1;

btnFoco.addEventListener('click', () => {
    body.setAttribute('data-contexto', 'foco');
    btnFoco.classList.toggle('ativo');
    btnCurto.classList.remove('ativo');
    btnLongo.classList.remove('ativo');
    tempoPrincipal = 1500;
    mostra()
})


btnCurto.addEventListener('click', () => {
    body.setAttribute('data-contexto', 'curto');
    btnCurto.classList.toggle('ativo');
    btnFoco.classList.remove('ativo');
    btnLongo.classList.remove('ativo');
    tempoPrincipal = 300
    mostra()

})

btnLongo.addEventListener('click', () => {
    body.setAttribute('data-contexto', 'longo');
    btnLongo.classList.toggle('ativo');
    btnCurto.classList.remove('ativo');
    btnFoco.classList.remove('ativo');
    tempoPrincipal = 900
    mostra()
})


const contagemREgresiva = () => {

    if(tempoPrincipal <= 0) {
        zerar()
        console.log('finalizado')
        return
    }
    tempoPrincipal -= 1;

    mostra()

}
btnComecar.addEventListener('click', inicio)

function inicio () {
    if(invalo) {
        zerar()
        return
    }

    btnComecar.innerHTML = `
    <span class="material-symbols-outlined">
        pause
    </span>
    Pausa
    `
    invalo = setInterval(contagemREgresiva, 1000)

}

function zerar() {
    clearInterval(invalo)
    invalo = null;
    btnComecar.innerHTML = `
    <span class="material-symbols-outlined">
        play_arrow
    </span>
    Começar
    `
}

function mostra() {
    const tempo = new Date(tempoPrincipal * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'})
    time.innerHTML = `${tempoFormatado}`
}
