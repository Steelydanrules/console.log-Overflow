import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer'  // add once we get users, q's a's
import sessionReducer from './session_reducer'
import errorsReducer from './errors_reducer'

export default combineReducers({
  entities: entitiesReducer, // add once we get users, q's a's
  session: sessionReducer,
  errors: errorsReducer
})