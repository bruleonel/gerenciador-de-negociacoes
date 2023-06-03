# Anotações Importantes

Comandos:
- npm install *para instalar as dependências*
- npm run start *para rodar o projeto no navegador*
# JavaScript

Javascript é uma linguagem de programação fácil de começar. Pode ser usado do lado do cliente e/ou do lado do servidor, é uma linguagem dinâmica, flexível, tem um ecossistema maduro, possui primitivos de linguagem como string, número e objeto, porém ela não verifica se você atribuiu os tipos de forma consistente e é aí que começa o debate.

Sendo uma linguagem dinamicamente tipada, isso significa que o JavaScript não sabe qual é o tipo de uma variável até que seja realmente instanciada em tempo de execução. Isso também significa que pode ser tarde demais.

# TypeScript

*TypeScript mantém uma relação incomum com o JavaScript, ou seja, oferece todos os recursos do JavaScript e uma camada adicional sobre eles: o sistema de tipos TypeScript.*

<a href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html">Documentação TypeScript</a>

Por exemplo, nessa função:

````js
function aumento(salario, aumento){
 return salario + aumento
}
aumento(10, "30")
````
Só vamos descobrir o erro quando o código rodar no navegador, já TypeScript adiciona suporte de tipo para JavaScript e captura erros de tipo durante a compilação. Se passarmos esse código para Typescript:

![erro](https://github.com/bruleonel/gerenciador-de-negociacoes/assets/104650333/49eb8d67-3fbb-41db-affd-2067534e7683)

A mensagem de erro vai aparecer logo na nossa frente dizendo que esperávamos dois inteiros e passamos um inteiro e uma string no parâmetro devido ao sistema de tipagem.

Uma outra característica interessante é que em JavaScript é muito comum nós criarmos objetos e passar algumas características, como por exemplo:


````js
const produto = {
  id:  1,
  nome:  "Copo",
};
````
Com TypeScript mantemos a mesma estrutura, porém utilizamos uma interface:

````js
interface Produto {
  id: number;
  name: string;  
}
````

**Usar TypeScript vai te trazer algumas vantagens como:**

- Feedback mais rápido de erros;
- Processo de refatoração mais fácil;
- Autocomplete da linguagem, muito boa no vscode;
- Poder adotar gradualmente typescript em uma base de código;

Porém, adotar TypeScript pode fazer com que a produtividade do time caia em um primeiro momento, pois existe uma curva de aprendizado que não pode ser ignorada, outro ponto é que para usar TypeScript, você precisa de um processo de construção para compilar para código JavaScript. O processo de construção pode demorar um certo tempo dependendo do tamanho do seu projeto.

Se você usa JavaScript em projetos NextJS, por exemplo, uma alternativa para fazer essa checagem de tipos é utilizar<a href="https://pt-br.legacy.reactjs.org/docs/typechecking-with-proptypes.html">[PropTypes**]</a>

````js
import PropTypes from 'prop-types';
// código omitido
export const Link = ({ children, href, ...props }) => (
  <NextLink href={href} passHref>
     <StyledLink {...props}>
    {children}
    </StyledLink>
  </NextLink>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
````

**Qual é a diferença entre JavaScript e TypeScript?**
São duas linguagens de programação diferentes, porém uma é o superconjunto de outra. TypeScript é esse superconjunto, possibilitando que você use absolutamente tudo do JavaScript de forma válida. isto é, todo seu código JavaScript é válido em TypeScript (mas não o contrário). A principal diferença vai ser em relação a tipagem de dados, ao uso de classes, aos mecanismos de abstração, que são bem mais fortes.

**Fonte:** <a href="https://pt-br.legacy.reactjs.org/docs/typechecking-with-proptypes.html">Artigo da Alura</a>
## Pontos a considerar

Usar tipagem obrigatória, assim o código não define como "any";
Ex:
````js
    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
````
*Mudar a conficaração do tsconfig.js*

## Benefícios da Tipagem Estática

**Classe Sem Tipagem**

````js
export class NegociacaoController {
    private inputData;
    private inputQuantidade;
    private inputValort;

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
  ````
Ao deixar as classes sem a tipagem o TS adota o tipo any, o problema desse tipo é que ele aceita qualque coisa que é mesmo comportmento do JS

**Tipando a Classe**

````js
export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
````
A propriedade ````js "noImplicitAny":["true"]```` te obriga a tipar as classes tornando seu código mais seguro e preparado

*OBS.: Quando a tipagem é feita direto na propriedade não é necessário a tipagem*

ex:

````js
export class NegociacaoController {
    private inputData = "30/01/2023";
    }
````
A tipagem também deve ser feita em métodos!

## Avançando na modelagem do domínio

````js
    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
        //return [...this.negociacoes]; foi implementado para que ao listar os elementos não fosse possível alterar o array, dessa forma ele lista uma nova lista. Só que o problema foi resolvido com o Readonly
    }
`````

## Simplificando o código

Repare que, geralmente, nas liguagens tipadas, é feito os atributos são declarados da seguinte maneira:

````js
export class Negociacao {
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
````

Aqui, com type Script também podemos fazes dessa forma, mas no TS podemos simplificar fazendo isto:

````js
export class Negociacao {
    constructor( 
    private _data: Date,
    private _quantidade: number,
    private _valor: number) {}
}
````
# QUE LINDOOOOO!!! AMEI 😍
