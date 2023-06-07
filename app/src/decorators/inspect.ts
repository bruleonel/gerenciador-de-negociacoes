/* Caso seu método possa receber parâmentros no futuro crie ele assim:
export function inspect() {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args: any[]) {
            console.log(`--- Método: ${propertyKey}`);
            console.log(`--- parâmetros: ${JSON.stringify(args)}`);
            const retorno = metodoOriginal.apply(this, args);
            console.log(`--- retorno: ${JSON.stringify(retorno)}`);
            return retorno
            }
            return descriptor;
        };
}

Caso você tenha certeza que não haverá parâmetros crie ele assim: */

export function inspect(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`--- Método: ${propertyKey}`);
        console.log(`--- parâmetros: ${JSON.stringify(args)}`);
        const retorno = metodoOriginal.apply(this, args);
        console.log(`--- retorno: ${JSON.stringify(retorno)}`);
        return retorno
        }
        return descriptor;
}