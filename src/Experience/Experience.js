import * as THREE from 'three';

import Sizes from './Utils/Sizes.js';
import Time from './Utils/Time.js';
import Camera from './Camera.js';
import Renderer from './Renderer';
import World from './World/World.js';
import Resources from './Utils/Resources.js';
import PostProcessing from './PostProcessing.js';
import Stats from 'stats.js';

import sources from './sources.js';

let instance = null;

export default class Experience {
  constructor(_canvas, object) {
    // Singleton
    if (instance) {
      return instance;
    }
    instance = this;

    // Global access
    window.experience = this;

    // Options
    this.canvas = _canvas;

    this.object = object;

    // Setup
    //this.debug = new Debug();
    this.sizes = new Sizes();
    this.time = new Time();
    this.scene = new THREE.Scene();
    this.scene.updateMatrixWorld(true);
    this.resources = new Resources(sources);
    this.camera = new Camera();
    this.renderer = new Renderer();
    //this.postProcessing = new PostProcessing();
    this.world = new World();
    this.stats = new Stats();

    this.setStats();

    // Resize event
    this.sizes.on('resize', () => {
      this.resize();
    });

    // Time tick event
    this.time.on('tick', () => {
      this.update();
    });
  }

  setStats() {
    this.stats.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(this.stats.dom);
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
  }

  update() {
    this.stats.begin();
    this.camera.update();
    this.world.update();
    this.renderer.update();
    this.stats.end();
    //this.postProcessing.update();
  }

  destroy() {
    this.sizes.off('resize');
    this.time.off('tick');

    // Traverse the whole scene
    this.scene.traverse((child) => {
      // Test if it's a mesh
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();

        // Loop through the material properties
        for (const key in child.material) {
          const value = child.material[key];

          // Test if there is a dispose function
          if (value && typeof value.dispose === 'function') {
            value.dispose();
          }
        }
      }
    });

    this.camera.controls.dispose();
    this.renderer.instance.dispose();

    //if (this.debug.active) this.debug.ui.destroy();
  }
}
