import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Main from './views/main';
import NotFound from './views/NotFound'
import ShowErros from './components/'

const Routes = ({products = [], Errors = []}) => {
    return (
        <div>
            <Router>
                {(Errors) ? <ShowErrors/> : null}
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        </div>
    )
};

export default Routes;
