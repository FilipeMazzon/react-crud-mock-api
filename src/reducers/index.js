import {combineReducers} from "redux";

import {Errors} from './ErrosReducer';
import {productsReducer} from "./ProductsReducer";

export const Reducers = combineReducers({
    Errors,
    products: productsReducer
});
