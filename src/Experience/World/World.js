import Experience from '../Experience.js';
import Environment from './Environment.js';
import YellowSphere from './YellowSphere.js';
import Stand from './Stand.js';
import OrangeSphere from './OrangeSphere.js';
import DarkOrangeSphere from './DarkOrangeSphere.js';
import Machine from './Machine.js';

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    // Wait for resources
    this.resources.on('ready', () => {
      this.yellowSphere = new YellowSphere();
      this.orangeSphere = new OrangeSphere();
      this.darkOrangeSphere = new DarkOrangeSphere();
      //this.redSphere = new RedSphere();
      this.stand = new Stand();
      this.machine = new Machine();
      //this.glassWall = new GlassWall();
      //this.background = new Background();
      this.environment = new Environment();
    });
  }

  update() {
    if (this.stand) this.stand.update();
    if (this.yellowSphere) this.yellowSphere.update();
  }
}
