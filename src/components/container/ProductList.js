import {getProductFromAPI} from '../../actions/products';
import ProductList from '../UI/ProductList';
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    products: state.products
});

const mapDispatchToProps = dispatch => {
    return {
        refreshWithAPI() {
            dispatch(
                getProductFromAPI
            )
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
