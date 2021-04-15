function gerarNumeroAleatorio() {
    let numero = Math.round(Math.random() * valorMaximo - 1 + valorMinimo)
    return numero
}

function adicionarNumeroSorteados() {
    for (let i = 1; i <= quantidadeNumerosEscolha; i++) {

        let numero = gerarNumeroAleatorio()
        if (sorteados.includes(numero)) {
           numero = numero + 1
        }
        sorteados.push(numero)
    }
}

function numeroValido(numero) {
    return valorMinimo < numero && numero <= valorMaximo && !isNaN(numero)
}

function numeroNaoEscolhido(numero) { 
    return !escolhidos.includes(numero)
}

function obtemIntersecao(arrayA, arrayB){
    let intersecao = []

    for (let i = 0 ; i < arrayA.length; i++) {
        if (arrayA.includes(arrayB[i])){
            intersecao.push(arrayB[i])
        }
    }

    return intersecao
}


var sorteados = []
var escolhidos = []

