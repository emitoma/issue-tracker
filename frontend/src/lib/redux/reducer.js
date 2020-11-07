import { combineReducers } from 'redux';
import authReducer from '../auth/redux/reducer';

const rootReducer = combineReducers({ auth: authReducer });

export default rootReducer;
