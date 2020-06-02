import { connect } from 'react-redux';
import { login } from '../../actions/session';
import LogIn from './login';

const mDP = dispatch => ({
  login: (formUser) => dispatch(login(formUser))
});


export default connect(null, mDP)(LogIn)