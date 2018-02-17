import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { action_addNewCourse } from '../actions/index';

class addNewClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classTitle: '',
      country: 'USA',
      duration: '',
      instructors: [this.props.loggedInUser],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // Maybe query database (namely?) for FC employees and have user select persons name.
    let value = e.target.name === 'instructors' ? [...this.state.instructors, e.target.value] : e.target.value;
    this.setState({ [e.target.name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.newClass(this.state);
  }

  render() {
    let countries = ['USA', 'UK', 'DE', 'CE'];

    return (
      <form onSubmit={this.handleSubmit}>
        <p>Class Title <br />
          <input type="text" name="classTitle" placeholder='Course Name' value={this.state.classTitle} onChange={ this.handleChange } />
        </p>

        <fieldset>
          <legend>Country being taught in:</legend>
          {countries.map( (country) => {
              return (
                <label key={ country }> { country }
                  <input
                    type='radio'
                    value={ country }
                    id={ country }
                    name='country'
                    checked={ this.state.country === country }
                    onChange={ this.handleChange }
                  />
                </label>
              );
          })}
        </fieldset>

        <p>What date would you like to teach your class?</p>
        <p>Add date picker here</p>

        <p>Duration:<br />
          <input
            id='duration'
            type='text'
            name='duration'
            placeholder='how long will this class be?'
            value={ this.state.duration }
            onChange={ this.handleChange }
          />
      </p>

        <p>Anyone else teaching this course with you? <br />
          <input type="text" name='instructors' placeholder="Anyone else? @name" onChange={ this.handleChange } />
        </p>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ newClass: action_addNewCourse }, dispatch)
}

export default connect(null, mapDispatchToProps)(addNewClass);
