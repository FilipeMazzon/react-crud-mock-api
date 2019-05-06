import React, {useEffect, useState} from 'react'
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import axios from 'axios';
import {updateProduct, deleteProduct} from '../action';
import {url} from '../config/url.json'
import Modal from './GenericModal.js'
import ModalDelete from './modalDelete'

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const columns = [{
        Header: "id",
        accessor: "id"
    }, {
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
    }, {
        Header: 'prize',
        accessor: 'prize'
    }, {
        Header: 'description',
        accessor: 'description'
    }, {
        Header: '',
        Cell: row => (
            <Modal data={row.original}
                   buttonLabel="edit"
                   title="Edit Product"
                   action={updateProduct}
            />
        )
    }, {
        Header: '',
        Cell: row => (
            <ModalDelete data={row.original}
                         action={deleteProduct}/>
        )
    }];
    useEffect(() => {
        (async () => {
            try {
                const result = await axios(
                    url
                );
                setProducts(result.data);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);
    console.log(products);
    return (
        <div>
            <ReactTable
                data={products}
                columns={columns}
                minRows={1}
                filterable={true}/>
        </div>
    )
};

export default ProductList;


