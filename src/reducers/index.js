import {combineReducers} from "redux";

import {Errors} from './ErrosReducer';
import {products} from "./ProductsReducer";

export const Reducers = combineReducers({
    Errors,
    products
});
