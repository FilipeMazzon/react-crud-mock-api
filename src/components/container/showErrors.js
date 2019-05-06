import ShowErrors from '../UI/error/index'
import { clearError } from '../../actions/errors'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        Errors: state.Errors
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onClearError(index) {
            dispatch(
                clearError(index)
            )
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ShowErrors)
