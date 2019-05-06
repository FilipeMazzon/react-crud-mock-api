import {ADD_PRODUCT, CHANGE_PRODUCTS, DELETE_PRODUCT, EDIT_PRODUCT} from '../constants/products';
export const products = (state = [], action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [
                ...state,
                action.payload
            ];
        case DELETE_PRODUCT:
            return state.filter((product, i) => i !== action.payload);
        case EDIT_PRODUCT:
            return state.map((product, i) => {
                if (i === action.payload.id) {
                    return action.payload.product
                } else {
                    return product;
                }
            });
        case CHANGE_PRODUCTS:
            console.log(action.payload);
            return action.payload;
        default:
            return state
    }
};
