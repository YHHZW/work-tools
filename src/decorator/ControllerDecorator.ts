import ApiResponseNew from '../utils/ApiResponseNew'

export function authorityIntercept(target: any, name: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const oldValue = descriptor.value
    descriptor.value = async function (...args: any) {
        const [req, res, next] = args
        try {
            if (req.user) {
                return await oldValue.apply(this, args)
            } else {
                res.send(ApiResponseNew.to412())
            }
        } catch (err) {
            next(err)
        }
    }
    return descriptor
}