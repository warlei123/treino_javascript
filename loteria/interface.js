function escreverNumerosDigitados() {
    escreverNumerosEscolhidos.innerHTML = `Seus numeros são:<p style="color:brown; background-color: rgba(100, 211, 174)">${escolhidos.join(" / ")}</p>`
    escreverResultado.innerHTML = `<button id="verificar" onclick="resultado()">ver resultado</button>`
}

function resultado() {
    let comparados = obtemIntersecao(sorteados, escolhidos)
    escreverResultado.innerHTML = `os numero sorteados sao: <p style="color:brown; background-color: rgba(100, 211, 174)"> ${sorteados.join(" / ")}</p>
    você acertou ${comparados.length} numeros<br>
    numeros acertados: <br>${comparados.join(", ")}`
}

function teste() {
    quantidadeEscolha.innerHTML = quantidadeNumerosEscolha
    numeroMax.innerHTML = valorMaximo
    numeroMin.innerHTML = valorMinimo + 1
}

var escreverNumerosEscolhidos = document.getElementById("substituir")
var escreverResultado = document.getElementById("consultar")
var quantidadeEscolha = document.getElementById("numeroEscolhas")
var numeroMax = document.getElementById("numeroMax")
var numeroMin = document.getElementById("numeroMin")