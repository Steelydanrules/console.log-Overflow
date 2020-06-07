import { connect } from 'react-redux';

import { logout } from '../../actions/session';
import { login } from '../../actions/session';
import NavBar from './navbar';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    searchBar: ""
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  loginDemoUser: () => dispatch(login({
    username: "steelydanrules",
    email: "steelydanrules@consolelogoverflow.com",
    password: "123456"
  }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);