export function bindModel(arg: string | { new(...args: any[]): {} }) {
    let name: string
    if (typeof arg === 'function') {
        return bind(arg)
    }
    name = arg
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

interface PropertyDescriptor {
    ctx: any;
    configurable?: boolean;
    enumerable?: boolean;
    value?: any;
    writable?: boolean;
    get?(): any;
    set?(v: any): void;
}

export function bindTransaction(target: any, name: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const oldValue = descriptor.value
    descriptor.value = async function (...args: any) {
        const sequelize = this.ctx.db
        const t = await sequelize.transaction()
        try {
            const result = await oldValue.apply(this, [...args, t])
            await t.commit()
            return result
        } catch (err) {
            await t.rollback()
            throw err
        }
    }
    return descriptor
}