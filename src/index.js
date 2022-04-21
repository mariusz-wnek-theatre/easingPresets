import './styles.css';

import Experience from './Experience/Experience.js';

const body = document.querySelector('body');
const canvas = document.createElement('canvas');
body.appendChild(canvas);

const experience = new Experience(document.querySelector('canvas'));
