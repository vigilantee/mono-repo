import { PLP_CONSTANTS } from "./plp.constants";

const initialState = {
    products: []
}

export const PlpReducer = ( state = initialState, action) => {
    switch(action.type) {
        case PLP_CONSTANTS.SET_PRODUCTS:
            return Object.assign({},state,{
                products: action.payload
            });
        default:
            return state;
    }
}