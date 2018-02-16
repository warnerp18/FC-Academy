export default function (state = [], action) {
  switch (action.type) {
    case 'ADD_COURSE':
      let updatedClasses = [ action.payload, ...state.defaultClasses ];
      return Object.assign({}, state, { defaultClasses: updatedClasses });
    case 'ADD_STUDENT':
      return state.map( course => {
        if(action.payload.courseId === course.id) {
          if (course.students.includes(action.payload.user)) {
            return course;
          };
          const updatedCourse = Object.assign({}, course, { students: [...course.students, action.payload.user] } );
          return updatedCourse;
        }
        return course;
      });
    default:
      return state;
  }
}
