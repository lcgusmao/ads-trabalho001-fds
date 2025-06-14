const botao = document.querySelector("#botao");
botao.style.background="rgb(251, 188, 111)";

botao.addEventListener("click",mostraMensagem);

function mostraMensagem(){
    document.querySelector("#mensagem").style.display="block"; // mostra mensagem oculta

    setTimeout(() => {
        mensagem.style.display = "none";
    }, 2000); // Oculta novamente após 2 segundos
}