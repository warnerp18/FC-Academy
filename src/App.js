import React, { Component } from 'react';

import './App.css';

import ClassList from './containers/classList';
import AddNewClass from './components/addNewClass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <span style={{padding: 15 }}>Logo</span>
          <span style={{padding: 15 }}>Link to see available classes</span>
          <span style={{padding: 15 }}>link to register a new class</span>
        </nav>
        <hr />
        <AddNewClass />
        <hr />
        <section>Home Page</section>
        <hr />
        <ClassList />
        <hr />
        <section>classes signed up for</section>
        <section>Classes teaching</section>
      </div>
    );
  }
}

export default App;
