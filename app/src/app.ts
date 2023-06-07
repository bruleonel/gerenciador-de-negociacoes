import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}

const importar = document.querySelector('#botao-importar');
if (importar) {
    importar.addEventListener('click',() => {
        controller.importaDados();
    });
} else {
    throw Error('Não foi possível importar a aplicação. Verifique se o importar existe.');
}
