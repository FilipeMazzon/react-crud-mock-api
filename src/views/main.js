import React from 'react';
import Modal from '../components/GenericModal';
import {insertProduct} from "../action";
import ProductList from "../components/ProductList";

function main() {
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
export default main;
