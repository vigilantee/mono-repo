import { PLP_CONSTANTS } from "./plp.constants";

export const setPlpProducts = payload => {
    return {
        type: PLP_CONSTANTS.SET_PRODUCTS,
        payload,
    }
}

export const getPlpProducts = payload => {
    return {
        type: PLP_CONSTANTS.FETCH_PRODUCTS,
        payload,
    }
}