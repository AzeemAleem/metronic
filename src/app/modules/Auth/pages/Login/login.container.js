import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import auth from '../../../../modules/Auth';
import Login from './Login';

const mapStateToProps = (state) => ({ loading: state.authReducer.loading });

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			login: auth.signin.request
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Login);