import {successResponse} from '../../mocks/loadResponse'

export function responseHandler(command : string, args : string[]) {
    if (command === "load_csv") {
        loadResponse(args)
    }
}

export function loadResponse(args: string[]) {
    return JSON.parse(successResponse())
}