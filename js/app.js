let contador = 0;

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let capaGame = gameClicado.querySelector('.dashboard__item__img');
    //let nomeGame = gameClicado.querySelector('.dashboard__item__name');
    let botao = gameClicado.querySelector('.dashboard__item__button');


    if (capaGame.classList.contains('dashboard__item__img--rented')) {

        //Confirmação de devolução
        let confirmacao = prompt('Deseja confirmar devolução (S/N)?');
        if (confirmacao == 's' || confirmacao == 'S') {
            capaGame.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
        } else if (confirmacao == 'n' || confirmacao == 'N') {
            return;
        }


    } else {
        contador = contador + 1;
        capaGame.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        imprimirAlugueis(contador);
    }
}

function imprimirAlugueis(contador) {

    let mensagem = contador > 1 ? `${contador} jogos foram alugados.` : `${contador} jogo foi alugado.`

    console.log(mensagem);
}