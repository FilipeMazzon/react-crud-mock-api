import {ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, CHANGE_PRODUCTS} from '../constants/products.json';
import {addError} from './errors';
import axios from 'axios'
import {url} from '../config/url.json'

export const addProducts = product =>
    ({
        type: ADD_PRODUCT,
        payload: product
    });

export const deleteProducts = product =>
    ({
        type: DELETE_PRODUCT,
        payload: product
    });

export const changeProducts = product =>
    ({
        type: CHANGE_PRODUCTS,
        payload: product
    });

export const editProducts = product =>
    ({
        type: EDIT_PRODUCT,
        payload: product
    });

export const addProductInAPI = product => async dispatch => {
    try {
        const result = await axios.post(url, product);
        console.log(result);
        dispatch(
            addProducts(result.data)
        )
    } catch (e) {
        dispatch(
            addError(e.message)
        )
    }
};
export const getProductFromAPI = async dispatch => {
    try{
        const response = await axios.get(url);
        const data = response.data;
         dispatch({
            type:CHANGE_PRODUCTS,
            payload:data
        })
    }catch (err) {
        dispatch(addError(err.message));
    }
};
export const updateProductInApi = data => async dispatch => {
    const newUrl = `${url}${data.id}`;
    console.log(data);
    try {
        await axios.put(newUrl, data);
        dispatch(
            editProducts(data)
        )
    } catch (e) {
        dispatch(
            addError(e.message)
        )
    }
};
