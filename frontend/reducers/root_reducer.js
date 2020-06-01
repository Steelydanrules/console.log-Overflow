import { combineReducers } from 'redux';
// import entitiesReducer from './entities'  // add once we get users, q's a's
import sessionReducer from './session'

export default combineReducers({
  // entities: entitiesReducer, // add once we get users, q's a's
  session: sessionReducer
})