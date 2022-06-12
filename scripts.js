function selecionarPedido (pedido, menu) {
    let pedido1Clicado = document.querySelector(".pedido1.selecionado");
    let pedido2Clicado = document.querySelector(".pedido2.selecionado");
    let pedido3Clicado = document.querySelector(".pedido3.selecionado");
    if (pedido1Clicado !== null && menu == 1) {
        pedido1Clicado.classList.remove("selecionado");
    } else if (pedido2Clicado !== null && menu == 2) {
        pedido2Clicado.classList.remove("selecionado");  
    } else if (pedido3Clicado !== null && menu == 3) {
        pedido3Clicado.classList.remove("selecionado");  
    } 
    pedido.classList.add("selecionado");
    botaoPedido();
}

function botaoPedido () {
    pedido1Clicado = document.querySelector(".pedido1.selecionado");
    pedido2Clicado = document.querySelector(".pedido2.selecionado");
    pedido3Clicado = document.querySelector(".pedido3.selecionado");
    let contador = 0;
    if (pedido1Clicado !== null) {
        contador ++;
    }
    if (pedido2Clicado !== null) {
        contador ++;
    }
    if (pedido3Clicado !== null) {
        contador ++;
    }
    const pedidoAberto = document.querySelector(".rodape > div > h3");
    if (contador == 1) {
        pedidoAberto.innerHTML = "Selecione, ainda, 2 itens<br>para fechar o pedido";
    } else if (contador == 2) {
        pedidoAberto.innerHTML = "Selecione, ainda, um item<br>para fechar o pedido";
    } else if (pedido1Clicado !== null && pedido2Clicado !== null && pedido3Clicado !== null) {
        const fecharPedido = document.querySelector(".rodape > div");
        fecharPedido.classList.add("fechado");
        const textoFecharPedido = document.querySelector(".rodape > div > h3");
        textoFecharPedido.innerHTML = "Fechar pedido";
    }
}

function calculaPedido () {
    let valorPedido1 = document.querySelector(".pedido1.selecionado .valor");
    valorPedido1 = Number(valorPedido1.replace(',', '.'));
    let valorPedido2 = document.querySelector(".pedido1.selecionado .valor");
    valorPedido2 = Number(valorPedido2.replace(',', '.'));
    let valorPedido3 = document.querySelector(".pedido1.selecionado .valor");
    valorPedido3 = Number(valorPedido3.replace(',', '.'));
    valorTotal = (valorPedido1 + valorPedido2 + valorPedido3);
    valorTotal = valorTotal.toFixed(2);
}