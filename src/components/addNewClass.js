import React, { Component } from 'react';

class addNewClass extends Component {
  render() {
    return (
      <form>
        <p>Class Title <br />
          <input type="text" name="Course Name" />
        </p>

        <p>Country being taught in:
          <label>
            <input id="usa" type="radio" name="country" value="usa" />
            USA
          </label>
          <label>
            <input id="UK" type="radio" name="country" value="UK" />
            UK
          </label>
          <label>
            <input id="CE" type="radio" name="country" value="CE" />
            CE
          </label>
        </p>

        <p>What date would you like to teach your class?</p>
        <p>Add date picker here</p>

        <p>Duration:<br />
          <input id="duration" type="text" name="duration" placeholder="how long will this class be?" />  
      </p>

        <p>Anyone else teaching this course with you? <br />
          <input type="text" name="Additional Instructor" placeholder="Anyone else? @name" />
        </p>
      </form>
    )
  }
}

export default addNewClass;
