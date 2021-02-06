import { combineReducers } from 'redux';
import authReducer from '../auth/redux/reducer';
import projectReducer from '../project/redux/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
});

export default rootReducer;
