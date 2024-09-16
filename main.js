const PANTALLA = document.querySelector('.screen')
const KEYS = document.querySelectorAll('.key')
let valorActual = '0'
let valorViejo = ''
let operador = null

KEYS.forEach(key =>{
    key.addEventListener('click', () =>{
        const VALOR = key.getAttribute('data-key')
        if (!isNaN(VALOR) || VALOR === '.'){
            almacenarNumero(VALOR)
        } else if (VALOR === 'reset'){
            btnReset()
        } else if (VALOR === 'del'){
            btnDel()
        } else if (VALOR === '='){
            btnIgual()
        } else{
            fnOperador(VALOR)
        }
        mostrarEnPantalla()
    })
})

function mostrarEnPantalla(){
    PANTALLA.innerHTML = valorActual
}

function btnReset(){
    valorActual = '0'
    operador = null
    valorViejo = ''
}

function almacenarNumero (VALOR){
    if (valorActual === '0') {
        valorActual = VALOR
    } else {
        valorActual += VALOR
    }
}

function btnDel(){
    valorActual = valorActual.slice(0, -1) || '0'
}

function fnOperador(VALOR){
    if (operador && valorViejo !== ''){
        btnIgual()
    }

    valorViejo = valorActual
    valorActual = '0'
    operador = VALOR === 'x' ? '*' : VALOR
}

function btnIgual(){
    if (operador && valorViejo !== '') {
        valorActual = eval(`${valorViejo}${operador}${valorActual}`).toString();
        operador = null
        valorViejo = ''
    }
}
