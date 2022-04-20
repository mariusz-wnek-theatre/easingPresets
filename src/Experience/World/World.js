import Experience from '../Experience.js';
import Environment from './Environment.js';
import YellowSphere from './YellowSphere.js';
import Stand from './Stand.js';
import OrangeSphere from './OrangeSphere.js';
import DarkOrangeSphere from './DarkOrangeSphere.js';
import Machine from './Machine.js';
import Indicator1_1 from './Indicator1_1.js';
import Indicator1_2 from './Indicator1_2.js';
import Indicator2_1 from './Indicator2_1';
import Indicator2_2 from './Indicator2_2.js';
import Indicator3_1 from './Indicator3_1.js';

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
      this.indicator1_1 = new Indicator1_1();
      this.indicator1_2 = new Indicator1_2();
      this.indicator2_1 = new Indicator2_1();
      this.indicator2_2 = new Indicator2_2();
      this.indicator3_1 = new Indicator3_1();
      //this.glassWall = new GlassWall();
      //this.background = new Background();
      this.environment = new Environment();
    });
  }

  update() {
    if (this.stadd) this.stand.update();
    if (this.yellowSphere) this.yellowSphere.update();
    if (this.orangeSphere) this.orangeSphere.update();
    if (this.darkOrangeSphere) this.darkOrangeSphere.update();
    if (this.indicator1_1) this.indicator1_1.update();
    if (this.indicator1_2) this.indicator1_2.update();
    if (this.indicator2_1) this.indicator2_1.update();
    if (this.indicator2_2) this.indicator2_2.update();
    if (this.indicator3_1) this.indicator3_1.update();
  }
}
