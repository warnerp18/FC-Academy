import React, { Component } from 'react';

class Course extends Component {
  render() {
    let { course, courseSignUp } = this.props;
    return (
      <li className="classItem">
        <h3>{course.classTitle}</h3>
        <time>{course.date}</time>
        <p>{course.duration}</p>
        <h5>{course.location}</h5>
        <h5>Teacher(s): {course.instructors.map(instructor => <span key={instructor}>{instructor}, </span> )}</h5>
        <button onClick={ event => courseSignUp(event, course) }>Signup</button>
        <h2>Students</h2>
        <ul>
          {course.students.map( student => {
            return <li key={student}>{student}</li>
          })}
        </ul>
        <hr />
      </li>
    );
  }
}

export default Course;
