import { combineReducers } from 'redux';
import listReducer from './reducer/reducer'; // Your reducer

const rootReducer = combineReducers({
  list: listReducer
});

export default rootReducer;
