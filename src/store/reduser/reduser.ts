import { combineReducers } from 'redux';
import { userReducer } from './userInfo';
import { authReducer } from './auth';

export const rootReducer = combineReducers({
  userInfo: userReducer,
  auth: authReducer,
});
