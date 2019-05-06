import React from 'react';
import Modal from '../components/container/GenericModal';
import {addProductInAPI} from "../actions/products";
import ProductList from "../components/container/ProductList";

function main() {
    return (
        <div>
            <div className="container align-content-center">
                <Modal buttonLabel="Register"
                       title="Register Modal"
                       action={addProductInAPI}/>
            </div>
            <ProductList/>
        </div>
    );
}
export default main;
