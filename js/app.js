function alterarStatus(id) {
let gameClicado = document.getElementById(`game-${id}`);
let capaGame = gameClicado.querySelector('.dashboard__item__img');
let nomeGame = gameClicado.querySelector('.dashboard__item__name');
let botao = gameClicado.querySelector('.dashboard__item__button');

if(capaGame.classList.contains('dashboard__item__img--rented')){
    capaGame.classList.remove('dashboard__item__img--rented');
    botao.classList.remove('dashboard__item__button--return');
    botao.textContent = 'Alugar';

}else{
    capaGame.classList.add('dashboard__item__img--rented');
    botao.classList.add('dashboard__item__button--return');
    botao.textContent = 'Devolver';
}

}