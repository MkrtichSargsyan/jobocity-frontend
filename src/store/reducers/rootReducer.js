import {combineReducers} from 'redux';
import {jobsReducer} from './jobsReducer'
import {modalReducer} from './modalReducer'

export default combineReducers({
  jobsReducer,
  modalReducer
})