import React, { Component } from 'react';

import './App.css';

import CourseList from './containers/courseList';
import AddNewCourse from './components/addNewCourse';

class App extends Component {
  render() {
    let currentUser = 'Phil';

    return (
      <div className="App">
        <nav>
          <span style={{padding: 15 }}>Logo</span>
          <span style={{padding: 15 }}>Link to see available classes</span>
          <span style={{padding: 15 }}>link to register a new class</span>
        </nav>
        <hr />
        <AddNewCourse loggedInUser={ currentUser } />
        <hr />
        <section>Home Page</section>
        <hr />
        <CourseList loggedInUser={ currentUser } />
        <hr />
        <section>classes signed up for</section>
        <section>Classes teaching</section>
      </div>
    );
  }
}

export default App;
