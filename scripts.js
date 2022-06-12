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
    } else if (contador == 3) {
        const fecharPedido = document.querySelector(".rodape > div");
        fecharPedido.classList.add("fechado");
        const textoFecharPedido = document.querySelector(".rodape > div > h3");
        textoFecharPedido.innerHTML = "Fechar pedido";
    }
}
function travarScroll () {
    const trava = document.querySelector("body");
    trava.classList.add("travado");
}
const confirmarPedido = document.querySelector(".confirmar-pedido.escondido");
function mostraPedido () {
    if (pedido1Clicado !== null && pedido2Clicado !== null && pedido3Clicado !== null) {
        confirmarPedido.classList.remove("escondido");
        travarScroll();
        calculaPedido();
        const opcao1 = document.querySelector(".pedido1.selecionado strong");
        const prato = document.querySelector(".prato")
        prato.innerHTML = opcao1.innerHTML;
        const opcao2 = document.querySelector(".pedido2.selecionado strong");
        const bebida = document.querySelector(".bebida")
        bebida.innerHTML = opcao2.innerHTML;
        const opcao3 = document.querySelector(".pedido3.selecionado strong");
        const sobremesa = document.querySelector(".sobremesa");
        sobremesa.innerHTML = opcao3.innerHTML;
    }

}

function calculaPedido () {
    const pedido1 = document.querySelector(".pedido1.selecionado .valor");
    let valorPedido1 = pedido1.innerHTML;
    const preco1 = document.querySelector(".valor1");
    preco1.innerHTML = valorPedido1;
    valor1 = Number(valorPedido1.replace(',', '.'));
    const pedido2 = document.querySelector(".pedido2.selecionado .valor");
    let valorPedido2 = pedido2.innerHTML;
    const preco2 = document.querySelector(".valor2");
    preco2.innerHTML = valorPedido2;
    valor2 = Number(valorPedido2.replace(',', '.'));
    const pedido3 = document.querySelector(".pedido3.selecionado .valor");
    let valorPedido3 = pedido3.innerHTML;
    const preco3 = document.querySelector(".valor3");
    preco3.innerHTML = valorPedido3;
    valor3 = Number(valorPedido3.replace(',', '.'));
    total = (valor1 + valor2 + valor3).toFixed(2); //armazenar como número para procediemento de cobrança, que não será implementado aqui
    valorTotal = total.replace('.', ',');
    const precoTotal = document.querySelector(".total");
    precoTotal.innerHTML = "R$" + valorTotal;
}
function confirmaPedido () {
    escondePedido();

}
function cancelaPedido () {
    escondePedido();
    destravarScroll ();
}
function escondePedido () {
    confirmarPedido.classList.add("escondido");  
}
function destravarScroll () {
    const destrava = document.querySelector("body.travado");
    destrava.classList.remove("travado");
}