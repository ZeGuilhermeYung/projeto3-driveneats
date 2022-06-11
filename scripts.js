function selecionarPedido1(pedido1){
    const pedido1Clicado = document.querySelector(".selecionado");
    if (pedido1Clicado !== null) {
        pedido1Clicado.classList.remove("selecionado");
    }
    pedido1.classList.add("selecionado");
}