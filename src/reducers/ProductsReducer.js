import {ADD_PRODUCT, CHANGE_PRODUCTS, DELETE_PRODUCT, EDIT_PRODUCT} from '../constants/products';
import {FETCH_PRODUCTS,CANCEL_FETCHING} from '../constants/fetching.json'
import {combineReducers} from "redux";
export const object = (state = [], action) => {
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
            return action.payload;
        default:
            return state
    }
};

export const fetching = (state=false, action) => {
    switch(action.type) {
        case FETCH_PRODUCTS :
            return true;
        case CANCEL_FETCHING :
            return false;
        case CHANGE_PRODUCTS :
            return false;
        default:
            return state
    }
};

export const productsReducer = combineReducers({
    fetching,
    object
});
