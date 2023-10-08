import {successResponse} from '../../mocks/loadResponse'
import {errorBadRequest} from '../../mocks/loadResponse'

export function responseHandler(command : string, args : string[]) {
    if (command === "load_csv") {
        loadResponse(args)
    }
}

export function loadResponse(args: string[]) {
    if (args[1] === "yes"){
        return JSON.parse(successResponse())
    }
    else if (args[1] === "no") {
        return JSON.parse(errorBadRequest())
    }
}