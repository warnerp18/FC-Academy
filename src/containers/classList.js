import React, { Component } from 'react';
import { connect } from 'react-redux';

import Course from './course';
import { action_addStudent } from '../actions';

class ClassList extends Component {
  constructor(props) {
    super(props);

    this.signupForCourse = this.signupForCourse.bind(this);
  }

  signupForCourse(e, course) {
    let user = this.props.loggedInUser;

    this.props.courses.map( stateclass => {
      if (stateclass.id === course.id) {
        return this.props.addStudent(course.id, user)
      }
      return stateclass;
    })
  }


  render() {
    let user = this.props.loggedInUser;
    let { courses } = this.props;
    console.log(courses);

    return (
      <ul className="classList">
        {courses.map( course => {
          return (
            <Course 
              key={course.classTitle} 
              course={course} 
              courseSignUp={this.signupForCourse}
              user={user}
            />
          )
        })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    courses: state.classes
  };
}

function mapDispatchToProps(dispatch) { 
  return { 
    addStudent: (courseId, user) => { dispatch(action_addStudent(courseId, user)) } 
  } 
} 

export default connect(mapStateToProps, mapDispatchToProps)(ClassList);
