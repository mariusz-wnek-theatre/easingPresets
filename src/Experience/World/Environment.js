import * as THREE from 'three';
import { PMREMGenerator } from 'three';
import Experience from '../Experience';

export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.setBackground();
    this.setSunLight();
    this.setEnvironmentMap();
  }

  setBackground() {
    this.scene.background = new THREE.Color(0xf7f4ed);
  }

  setSunLight() {
    this.sunLight = new THREE.DirectionalLight('#ffffff', 4);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.camera.far = 5000;
    this.sunLight.shadow.mapSize.set(1024, 1024);
    this.sunLight.shadow.normalBias = 0.05;
    this.sunLight.position.set(-3.5, 4, -2);
    this.scene.add(this.sunLight);
  }

  setEnvironmentMap() {
    this.environmentMap = {};
    this.environmentMap.intensity = 1.4;
    this.environmentMap.texture = this.resources.items.environmentMapTexture;
    this.environmentMap.texture.encoding = THREE.sRGBEncoding;

    //pmrem generator
    this.environmentMap.pmremGenerator = new PMREMGenerator(
      this.experience.renderer.instance
    );
    this.environmentMap.pmremGenerator.compileEquirectangularShader();

    this.environmentMap.pmrem = this.environmentMap.pmremGenerator.fromCubemap(
      this.environmentMap.texture
    ).texture;

    this.scene.environment = this.environmentMap.pmrem;
    //this.scene.background = this.environmentMap.pmrem;

    this.environmentMap.updateMaterials = () => {
      this.scene.traverse((child) => {
        if (
          child instanceof THREE.Mesh &&
          child.material instanceof THREE.MeshStandardMaterial
        ) {
          child.material.envMap = this.environmentMap.pmrem;
          child.material.envMapIntensity = this.environmentMap.intensity;
          child.material.needsUpdate = true;
        }
      });
    };
    this.environmentMap.pmremGenerator.dispose();
    this.environmentMap.updateMaterials();
  }
}
