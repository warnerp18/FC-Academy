import { combineReducers } from 'redux';

// import CoursesReducer from './reducer_courses';

import { ADD_COURSE, ADD_STUDENT, REQUEST_COURSES, RECEIVED_COURESES } from '../actions';

function courses(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
  },
  action
) {
  switch (action.type) {
    case 
  }
}

const rootReducer = combineReducers({
  courses: CoursesReducer
});

export default rootReducer;
