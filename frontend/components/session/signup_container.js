import { connect } from 'react-redux';
import { createNewUser, clearSessionErrors } from '../../actions/session';
import Signup from './signup';

const mSP = (state) => ({
  errors: Object.values(state.errors.session),
})


const mDP = dispatch => ({
  createNewUser: (formUser) => dispatch(createNewUser(formUser)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});


export default connect(mSP, mDP)(Signup)