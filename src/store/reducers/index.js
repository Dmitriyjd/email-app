import {combineReducers} from 'redux';
import letters from './letters'

const rootReducer = combineReducers({
  mailbox: letters,
});

export default rootReducer;
