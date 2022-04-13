import * as THREE from 'three';
import Experience from '../Experience';

//Yellow Sphere
export default class Indicator2_1 {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;

    // Resource
    this.resource = this.resources.items.indicator2_1;

    this.setModel();
  }

  setModel() {
    this.model = this.resource.scene;
    this.scene.add(this.model);
    this.model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
      }
    });
    this.model.position.y = 0.018;
  }

  update() {
    this.model.rotation.x = this.experience.object.value.indicator2_1;
  }
}
