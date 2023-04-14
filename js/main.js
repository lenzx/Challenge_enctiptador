const botonEncriptar = document.querySelector('.button-encriptar');
botonEncriptar.addEventListener('click', encriptador)

const botonDesencriptar = document.querySelector('.button-desencriptar');
botonDesencriptar.addEventListener('click', desencriptador)

const botonCopiar = document.querySelector('.button-copiar')
botonCopiar.addEventListener('click',copiarTexto)


function encriptador(){
    let texto = document.querySelector(".text-area").value;
    const resultado = fnEncriptar(encriptar,texto)
    let res = document.querySelector('.container-traduccion');
    let subtitle = document.querySelector('.container-subtitle')
    if (texto != '') {
        res.classList.remove('display')
        subtitle.classList.add('display')
        res.innerHTML=`${resultado}`
    } else {
        res.classList.add('display')
        subtitle.classList.remove('display')
    }

}

function desencriptador(){
    let texto = document.querySelector(".text-area").value;
    const resultado = fnEncriptar(desencriptar,texto)
    let container = document.querySelector('.container-traduccion-text')
    let res = document.querySelector('.container-traduccion');
    let subtitle = document.querySelector('.container-subtitle')
    if (texto != '') {
        container.classList.remove('display')
        subtitle.classList.add('display')
        res.innerHTML=`${resultado}`

    } else {
        container.classList.add('display')
        subtitle.classList.remove('display')
    }

}
async function copiarTexto () {
    try {
        await navigator.clipboard.writeText(document.querySelector('.container-traduccion').value)
    } catch (err) {
            console.error('Error al copiar al portapapeles:', err)
        }

}
const encriptar= {
    e : 'enter',
    i : 'imes',
    a : 'ai',
    o : 'ober',
    u : 'ufat'
}

const desencriptar = {
    enter : 'e',
    imes : 'i',
    ai : 'a',
    ober : 'o',
    ufat : 'u'
}

function fnEncriptar (codigoEncriptador,palabra) {
    for (let x in codigoEncriptador) {
        palabra = palabra.replace(new RegExp(x,'gi'),codigoEncriptador[x])
        }
    return palabra;
} 
