import { connect } from 'react-redux';
import Search from './search'


const mSP = (state, ownProps) => {
  return ({
    questions: Object.values(state.entities.questions),
  })
};

export default connect(mSP, null)(Search)