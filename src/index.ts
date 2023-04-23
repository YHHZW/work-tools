import { authorityIntercept } from './decorator/ControllerDecorator'
import { bindModel, bindTransaction } from './decorator/ServiceDecorator'

export {
    bindModel,
    authorityIntercept,
    bindTransaction
}