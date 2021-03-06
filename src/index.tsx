import './styles.css';
import state from './state.json';

import Experience from './Experience/Experience.js';
import { getProject } from '@theatre/core';
import studio from '@theatre/studio';
import theatreObjects from './Experience/theatreObjects';

console.log(process.env.NODE_ENV);

studio.initialize();
studio.ui.hide();
const project = getProject('Project', { state });
const sheet = project.sheet('Scene');
const theatreObject = sheet.object('First Object', theatreObjects);
const sequence = sheet.sequence;

project.ready.then(() => {
  sequence.play({ iterationCount: 10000 });
});

const body = document.querySelector('body');
const canvas = document.createElement('canvas');
body.appendChild(canvas);

const experience = new Experience(
  document.querySelector('canvas'),
  theatreObject
);
