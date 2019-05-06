import ModalDelete from '../UI/modalDelete';
import {connect} from 'react-redux'

const mapStateToProps = (state, props) => {
    return {
        className:props.className,
        data: props.data,
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalDelete)
