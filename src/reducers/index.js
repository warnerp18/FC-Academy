import { combineReducers } from 'redux';

import ClassesReducer from './reducer_classes';

const rootReducer = combineReducers({
  classes: ClassesReducer
});

export default rootReducer;
