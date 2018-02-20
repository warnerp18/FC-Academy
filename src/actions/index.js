export const ADD_COURSE = 'ADD_COURSE';
export const ADD_STUDENT = 'ADD_STUDENT';
export const REQUEST_COURSES = 'REQUEST_COURSES';
export const RECEIVED_COURESES = 'RECEIVED_COURESES';


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

function action_requestCourses(course) {
  return {
    type: REQUEST_COURSES,
    payload: course,
  }
}

function action_receivedCourses(course, json) {
  return {
    type: RECEIVED_COURESES,
    payload: courses,
    courses: json.data.children.map(child => child.data),
    receivedAt: Date.now(),
  }
}

// var request = new Request('http://localhost:8000/api/new-course', {
//   method: 'POST',
//   headers: {'Content-Type': 'application/json'},
//   body: JSON.stringify(newCourse)
// });

// return fetch(request)
//   .then( res => {
//     res.json()
//       .then( data => {
//         console.log(`data: ${data}`)
//         return {
//           type: ADD_COURSE,
//           payload: newCourse,
//         };
//       });
//   })
//   .catch(function(err) {
//     console.log(err);
//   });
