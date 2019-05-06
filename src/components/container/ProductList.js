import {getProductFromAPI} from '../../actions/products';
import ProductList from '../UI/ProductList';
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        products: state.products.object
    }
};

const mapDispatchToProps = dispatch => {
    return {
        refreshWithAPI() {
            dispatch(
                getProductFromAPI()
            )
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
