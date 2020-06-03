import { connect } from 'react-redux';

import Homepage from './homepage';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

export default connect(
  mapStateToProps,
  null
)(Homepage);
