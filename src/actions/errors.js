import {ADD_ERROR, CLEAR_ERROR} from '../constants/errors.json';

export const addError = (message) =>
    ({
        type: ADD_ERROR,
        payload: message
    });

export const clearError = index =>
    ({
        type: CLEAR_ERROR,
        payload: index
    });
