import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Signup from './signup';

const mSP = (state) => ({
  errors: Object.values(state.errors.session),
})


const mDP = dispatch => ({
  createNewUser: (formUser) => dispatch(createNewUser(formUser))
});


export default connect(mSP, mDP)(Signup)