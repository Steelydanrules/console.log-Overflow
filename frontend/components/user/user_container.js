import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user';
import User from './user'

const mSP = (state, ownProps) => {
  return({
    user: state.entities.users[ownProps.match.params.id]
})};

const mDP = dispatch => ({
  fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default connect(mSP, mDP)(User)