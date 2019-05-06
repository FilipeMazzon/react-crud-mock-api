import ProductList from '../UI/GenericModal';
import {connect} from 'react-redux'

const mapStateToProps = (state, props) => {
    return {
        Products: state.Products,
        action: props.action
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmit(action, product) {
            dispatch(
                action(product)
            )
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
