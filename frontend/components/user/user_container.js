import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user';
import { fetchQuestions } from '../../actions/questions';
import { fetchAnswers } from '../../actions/answers';
import User from './user'



const mSP = (state, ownProps) => {
  return({
    user: state.entities.users[ownProps.match.params.id]
})};

const mDP = dispatch => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchQuestions: () => dispatch(fetchQuestions()),
  fetchAnswers: () => dispatch(fetchAnswers())
})

export default connect(mSP, mDP)(User)