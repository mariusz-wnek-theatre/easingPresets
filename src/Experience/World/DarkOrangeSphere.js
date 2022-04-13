import * as THREE from 'three';
import Experience from '../Experience';

//Yellow Sphere
export default class DarkOrangeSphere {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;

    // Resource
    this.resource = this.resources.items.darkOrangeSphere;

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
  }

  update() {
    this.model.position.x = this.experience.object.value.darkOrangeSphereX;
  }
}
