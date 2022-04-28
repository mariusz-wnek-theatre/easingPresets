import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import studio from '@theatre/studio';
import { getProject } from '@theatre/core';
import App from './App';
import reportWebVitals from './reportWebVitals';

studio.initialize();
studio.ui.hide();

const project = getProject('Project');
const sheet = project.sheet('Scene');
const obj = sheet.object(
  // The object's key is "First object"
  'First object',
  // These are the object's default values (and as we'll later learn, its props types)
  {
    // we pick our first props's name to be "foo". It's default value is 0.
    // Theatre will determine that the type of this prop is a number
    foo: 0,
    // Second prop is a boolean called "bar", and it defaults to true.
    bar: true,
    // Last prop is a string
    baz: 'A string',
  }
);

const sequence = sheet.sequence;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App project={getProject('CRA project')} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
