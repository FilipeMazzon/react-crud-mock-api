import ModalDeletee from '../UI/modalDelete';
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalDeletee)
