import { combineReducers } from 'redux';
import authReducer from '../auth/redux/reducer';
import projectReducer from '../project/redux/reducer';
import issueReducer from '../issue/redux/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  issue: issueReducer,
});

export default rootReducer;
