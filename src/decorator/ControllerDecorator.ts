
export function bindModel(arg: string | { new(...args: any[]): {} }) {
    if (typeof arg === 'function') {
        return bind(arg)
    }
    const name = arg;
    function bind<T extends { new(...args: any[]): {} }> (constructor: T) {
        const className = name || constructor.name
        return class extends constructor {
            constructor(...args: any[]) {
                super(...args, className)
            }
        };
    }
    return bind
}