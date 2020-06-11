import { connect } from 'react-redux';
import { searchQuestions } from '../../actions/questions';
import { logout } from '../../actions/session';
import { login } from '../../actions/session';
import { withRouter } from 'react-router-dom';
import NavBar from './navbar';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    searchBar: "",
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  searchQuestions: (searchData) => dispatch(searchQuestions(searchData)),
  loginDemoUser: () => dispatch(login({
    username: "steelydanrules",
    email: "steelydanrules@consolelogoverflow.com",
    password: "123456"
  }))
  

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar));