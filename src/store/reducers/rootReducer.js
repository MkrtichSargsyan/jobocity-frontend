import { combineReducers } from 'redux';
import { jobsReducer } from './jobsReducer';
import { authReducer } from './authReducer';
import { modalReducer } from './modalReducer';

export default combineReducers({
  jobsReducer,
  modalReducer,
  authReducer,
});
