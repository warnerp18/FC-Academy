export default function (state = [], action) {
  switch (action.type) {
    case 'ADD_COURSE':
      const updatedCourse = Object.assign({},{ id: state.length+1, classTitle: '', location: '', duration: '', instructors: [],  students: [] }, action.payload);
      let updatedCourseList = [ updatedCourse, ...state ];
      return updatedCourseList;
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
