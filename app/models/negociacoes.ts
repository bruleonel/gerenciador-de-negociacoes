import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
        //return [...this.negociacoes]; foi implementado para que ao listar os elementos não fosse possível alterar o array, dessa forma ele lista uma nova lista. Só que o problema foi resolvido com o Readonly
    }
}

const negociacoes = new Negociacoes();
negociacoes.lista().forEach(n => {

});