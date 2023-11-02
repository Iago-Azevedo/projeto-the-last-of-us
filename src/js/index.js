/*
    -passo 1 - dar um jeito de pegar o elemento HTML dos botoes
    -passo 2 - dar um jeito de identificar o clique do usuario no botao
    -passo 3 - desmancar o botao selecionado anterior
    -passo 4 - marcar o botao clicado como se estivesse selecionada
    -passo 5 - esconder a imagem de fundo anterio
    -passo 6 - fazer aparecer a imagem de fundo correspondente ao botao clicado
*/

const boteosDoCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

boteosDoCarrossel.forEach((botao, indice)=> {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();

        botao.classList.add('selecionado')

        esconderImagemAtiva();

        imagens[indice].classList.add('ativa')
    })
})

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
