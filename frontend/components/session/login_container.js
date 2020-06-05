import { connect } from 'react-redux';
import { login } from '../../actions/session';
import LogIn from './login';

const mSP = (state) => ({
  demoUser: {
    username: "steelydanrules",
    email: "soccer_mom123@consolelogoverflow.com",
    password: "123456"
  },
  errors: Object.values(state.errors.session)
})

const mDP = dispatch => ({
  login: (formUser) => dispatch(login(formUser))
});


export default connect(mSP, mDP)(LogIn)