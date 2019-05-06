import React, {useEffect} from 'react'
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Modal from '../container/GenericModal.js';
import {updateProductInApi,deleteProductFromAPI} from '../../actions/products'
import ModalDelete from '../container/modalDelete'

const ProductList = ({products = [], refreshWithAPI = f => f}) => {
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
                   action={updateProductInApi}
            />
        )
    }, {
        Header: '',
        Cell: row => (
            <ModalDelete data={row.original}
                         action={deleteProductFromAPI}/>
        )
    }];
    useEffect(() => {
       refreshWithAPI();
    },[refreshWithAPI]);
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


