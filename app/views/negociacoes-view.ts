//Cria a tabela para retornar as informações gravadas na tela

import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {

    protected template(model: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negociacao => {
                    return `
                    <tr>
                        <th>${this.formatarData(negociacao.data)}</th>
                        <th>${negociacao.quantidade}</th>
                        <th>${negociacao.valor}</th>
                    </tr>
                    `;
                }).join('')
            }
            </tbody>
        </table>
        `;
    }

    private formatarData(data: Date): string {
        return new Intl.DateTimeFormat().format(data)
    }
}