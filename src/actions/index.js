export function action_addNewCourse(newCourse) {
  return {
    type: 'ADD_COURSE',
    payload: newCourse,
  };
}

export function action_addStudent(courseId, user) {
  return {
    type: 'ADD_STUDENT',
    payload: {courseId, user},
  }
}
