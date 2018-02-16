import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import './index.css';
import reducers from './reducers';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const initialStae = { classes: [
  { id:1, classTitle: 'Communicating Your Message', location: 'USA', date: '14 Feb 2018, 2PM' , duration: '1hr', instructors: ['David De Koning'], students: [], },
  { id:2, classTitle: 'Career Development Panel', location: 'UK', date: '21 Feb 2018, 3PM', duration: '1hr', instructors: ['Angus Sanders'], students: [], },
  { id:3, classTitle: 'Intro to Programming (Ruby + Javascript)', location: 'US', date: '09 Jan 2018, 9AM', duration: '1hr x 6 weeks' , instructors: ['Amanda Fielding', 'Emily Cheng'], students: [], },
  { id:4, classTitle: 'Retrospectives: Solving Yesterday\'s Problems for a Better Tomorrow', location: 'DE', date: '17 Jan 2018, 4PM', duration: '1 hr' , instructors: ['Ahmed Samy'], students: [],},
]};

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers, initialStae) }>
    <App />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
