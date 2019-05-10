import GenericModal from '../UI/GenericModal';
import {connect} from 'react-redux'

const mapStateToProps = (state, props) => {
    return {
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

export default connect(mapStateToProps, mapDispatchToProps)(GenericModal)
