import React from 'react';
import ProductList from './components/ProductList'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './components/GenericModal';
import {insertProduct} from './action';
import './App.css';

function App() {
    return (
        <div>
            <div className="container align-content-center">
                <Modal buttonLabel="Register"
                       title="Register Modal"
                       action={insertProduct}/>
            </div>
            <ProductList/>
        </div>
    );
}

export default App;
