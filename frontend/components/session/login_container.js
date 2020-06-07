import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session';
import LogIn from './login';

const mSP = (state) => ({
  demoUser: {
    username: "steelydanrules",
    email: "steelydanrules@consolelogoverflow.com",
    password: "123456"
  },
  errors: Object.values(state.errors.session)
})

const mDP = dispatch => ({
  login: (formUser) => dispatch(login(formUser)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});


export default connect(mSP, mDP)(LogIn)