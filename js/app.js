function alterarStatus(id) {

    if (id == 1) {
        let capaJogo1 = document.getElementById('capaMonopoly');
        let botaoAlugar = document.getElementById('alugarMonopoly');


        botaoAlugar.classList.add('dashboard__item__button--return');
        botaoAlugar.classList.remove('dashboard__item__button');
        botaoAlugar.innerHTML = 'Devolver';

        capaJogo1.classList.add('dashboard__item__img--rented');
    }else if(id == 2){
        let capaJogo2 = document.getElementById('capaTtr');
        let botaoAlugar = document.getElementById('alugarTtr');


        botaoAlugar.classList.add('dashboard__item__button--return');
        botaoAlugar.classList.remove('dashboard__item__button');
        botaoAlugar.innerHTML = 'Devolver';

        capaJogo2.classList.add('dashboard__item__img--rented');
    }

}