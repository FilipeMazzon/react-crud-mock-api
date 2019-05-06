import {ADD_ERROR,CLEAR_ERROR,CLEAN_ALL_ERRORS} from '../constants/errors';

export const Errors = (state = [], action) => {
    switch(action.type) {
        case ADD_ERROR :
            return [
                ...state,
                action.payload
            ];
        case CLEAR_ERROR:
            return state.filter((message, i) => i !== action.payload);
        case CLEAN_ALL_ERRORS:
            return [];
        default:
            return state
    }
};
