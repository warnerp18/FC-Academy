import React, { Component } from 'react';

import { connect } from 'react-redux';

class ClassList extends Component {

  renderList() {
    return (
      this.props.classes.map( classItem => {
        return (
          <li key={classItem.classTitle} className="classItem">
            <h3>{classItem.classTitle}</h3>
            <time>{classItem.date}</time>
            <p>{classItem.duration}</p>
            <h5>{classItem.location}</h5>
            <h5>Teacher(s): {classItem.instructors.map(instructor => <span key={instructor}>{instructor}, </span> )}</h5>
          </li> 
        );
      })
    );
  }

  render() {
    return (
      <ul className="classList">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    classes: state.classes 
  };
}

export default connect(mapStateToProps)(ClassList); 
