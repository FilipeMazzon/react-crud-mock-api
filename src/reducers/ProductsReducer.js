import {ADD_PRODUCT, CHANGE_PRODUCTS, DELETE_PRODUCT, EDIT_PRODUCT} from '../constants/products';

export const products = (state = [], action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [
                ...state,
                action.payload
            ];
        case DELETE_PRODUCT:
            return state.filter(product => product.id !== action.payload.id);
        case EDIT_PRODUCT:
            return state.map(product => product.id === action.payload.id ? action.payload : product);
        case CHANGE_PRODUCTS:
            return action.payload;
        default:
            return state
    }
};
