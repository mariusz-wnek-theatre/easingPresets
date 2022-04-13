import * as THREE from 'three';
import Experience from '../Experience';

//Yellow Sphere
export default class YellowSphere {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;

    // Resource
    //this.resource = this.resources.items.foxModel

    this.setGeometry();
    this.setTextures();
    this.setMaterial();
    this.setMesh();
  }

  setGeometry() {
    this.geometry = new THREE.SphereGeometry(0, 64, 32);
  }

  setTextures() {
    this.textures = {};
  }

  setMaterial() {
    this.material = new THREE.MeshStandardMaterial({
      map: this.textures.color,
      roughness: 0,
      metalness: 1,
    });
  }

  setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.x = this.experience.object.value.sphereX;
    console.log(this.mesh.position.x);
    console.log(this.experience.object.value.sphereX);
    this.scene.add(this.mesh);
  }

  update() {
    console.log('value' + this.experience.object.value.sphereX);
    this.mesh.position.z = this.experience.object.value.sphereX;
  }
}
