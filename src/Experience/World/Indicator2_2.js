import * as THREE from 'three';
import Experience from '../Experience';

//Yellow Sphere
export default class Indicator2_2 {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;

    // Resource
    this.resource = this.resources.items.indicator2_2;

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
    this.model.position.x = -0.22;
  }

  update() {
    this.model.rotation.x = this.experience.object.value.indicator2_2;
  }
}
