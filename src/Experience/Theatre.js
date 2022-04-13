import { getProject } from '@theatre/core';
import studio from '@theatre/studio';
import theatreObjects from './theatreObjects';

export default class Theatre {
  constructor() {
    this.initialize();
  }

  initialize() {
    this.theatre = studio.initialize();
    this.project = getProject('Project');
    this.sheet = this.project.sheet('Scene');
    this.object = this.sheet.object('First Object', theatreObjects);
  }
}
