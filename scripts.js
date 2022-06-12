function selecionarPedido(pedido, menu) {
    const pedido1Clicado = document.querySelector(".pedido1.selecionado");
    const pedido2Clicado = document.querySelector(".pedido2.selecionado");
    const pedido3Clicado = document.querySelector(".pedido3.selecionado");
    if (pedido1Clicado !== null && menu == 1) {
        pedido1Clicado.classList.remove("selecionado");
    } else if (pedido2Clicado !== null && menu == 2) {
        pedido2Clicado.classList.remove("selecionado");  
    } else if (pedido3Clicado !== null && menu == 3) {
        pedido3Clicado.classList.remove("selecionado");  
    }
    pedido.classList.add("selecionado");
}