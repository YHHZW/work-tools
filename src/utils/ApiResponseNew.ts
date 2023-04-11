import { HTTP_STATUS_CODE, HTTP_STATUS_MESSAGE } from '../enums/HttpEnums'

export default class ApiResponseNew {
    static to200(data: unknown) {
        return {
            code: HTTP_STATUS_CODE.OK,
            message: "成功",
            data: data
        }
    }

    static to411(data: unknown) {
        return {
            code: HTTP_STATUS_CODE.LOG_OUT_OF_DATE,
            message: "",
            data: data
        }
    }

    static to412() {
        return {
            code: HTTP_STATUS_CODE.USER_EXPERIMENT_DATE,
            message: HTTP_STATUS_MESSAGE.HTTP_MESSAGE_USER_EXPIRE,
            data: ""
        }
    }

    static to400(message: string) {
        return {
            code: HTTP_STATUS_CODE.BAD_REQUEST,
            message: message,
        }
    }

    static to409(message: string) {
        return {
            code: HTTP_STATUS_CODE.DATA_CONFLICT,
            message: message,
        }
    }

    static to420() {
        return {
            code: HTTP_STATUS_CODE.WEAPP_NOT_FOUND_IN_SCHOOL,
            message: HTTP_STATUS_MESSAGE.HTTP_MESSAGE_NOT_FOUND_IN_SCHOOL,
            data: ""
        }
    }

    static to422() {
        return {
            code: HTTP_STATUS_CODE.WEAPP_CONTACT_ADMIN,
            message: HTTP_STATUS_MESSAGE.HTTP_MESSAGE_WEAPP_CONTACT_ADMIN,
            data: ""
        }
    }

    static to423() {
        return {
            code: HTTP_STATUS_CODE.WEAPP_USER_EXISTENCE,
            message: HTTP_STATUS_MESSAGE.HTTP_MESSAGE_USER_EXISTENCE,
            data: ""
        }
    }

    static to455(data: unknown, message: string) {
        return {
            code: HTTP_STATUS_CODE.WEAPP_ERROR,
            message: message,
            data: data
        }
    }

    static to456(data: unknown, message: string) {
        return {
            code: HTTP_STATUS_CODE.WEAPP_ERROR_STOP,
            message: message,
            data: data
        }
    }

    static to201(data: unknown) {
        return {
            code: HTTP_STATUS_CODE.OKType,
            message: "成功",
            data: data
        }
    }
}