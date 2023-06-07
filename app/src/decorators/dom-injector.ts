//Buscando o elemento do dom
export function domInjector(seletor: string) {
    return function (target: any, propertyKey: string) {
        console.log(`Modificando o prototype ${target.constructor.name} e adicionando o getter para a propriedade ${propertyKey}`);

        let elemento: HTMLElement | null = null

        const getter = function () {
            if (!elemento) {
                elemento = <HTMLElement>document.querySelector(seletor);
                console.log(`Buscando elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}`);
            }
            return elemento;
        }
        Object.defineProperty(target, propertyKey, { get: getter });
    }
}

//Esse código busca o elemento do dom somente uma vez