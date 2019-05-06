import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Reducers} from './reducers';

const consoleMessages = store => next => action => {
    console.groupCollapsed(`dispatching action => ${action.type}`)
    const result = next(action)
    const statusNow = store.getState();
    console.log(`the state now is ${JSON.stringify(statusNow, null, 2)}`);
    console.groupEnd();
    return result;
};
export default (initialState={}) =>{
    return applyMiddleware(thunk,consoleMessages)(createStore)(Reducers,initialState);
}
