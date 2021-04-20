 
    var tela = document.getElementById("tela")
    var c = tela.getContext('2d')
    window.addEventListener("contextmenu", e => e.preventDefault())
    c.fillStyle = "gray"
    c.fillRect(0, 0, 600, 400)

    var corSelecionada = "white"
    var corAtiva = document.getElementById("mostra")
    

    function clique(cor){
        corSelecionada = cor
        corAtiva.style.backgroundColor = corSelecionada
    }

    var desenharCirculo = function (evento) {
        var x = evento.pageX - tela.offsetLeft
        var y = evento.pageY - tela.offsetTop
        c.fillStyle = corSelecionada
        c.beginPath()
        c.arc(x, y, 10, 0, 2 * 3.14)
        c.fill()
    }

    tela.onmousemove = desenharCirculo
    


    

    
    
    
   
  
