import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {addError} from "./actions/errors";
import StoreFactory from './store';
import sampleData from './config/InitialState.json'

const initialState = (localStorage["redux-store"]) ?
    JSON.parse(localStorage["redux-store"]) :
    sampleData;
const store = StoreFactory(initialState);
const saveState = () => {
    localStorage["redux-store"] = JSON.stringify(store.getState())
};
const handleError = error => {
    store.dispatch(
        addError(error.message)
    )
};
window.addEventListener("error", handleError);
window.addEventListener("options", handleError);
store.subscribe(saveState);
window.React = React;
window.store = store;
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
