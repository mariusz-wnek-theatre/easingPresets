import * as THREE from 'three';
import Experience from './Experience';

import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

export default class PostProcessing {
  constructor() {
    this.experience = new Experience();
    this.canvas = this.experience.canvas;
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.camera = this.experience.camera.instance;
    this.renderer = this.experience.renderer.instance;

    //this.setBokeh();
    this.setFxaa();
    //this.setBloom();
    //this.setComposer();
  }

  setBokeh() {
    //console.log(this.experience.object.value.blurMaxBlur);
    this.bokehPass = new BokehPass(this.scene, this.camera, {
      focus: this.experience.object.value.blurFocus,
      aperture: this.experience.object.value.blurAperture,
      maxblur: this.experience.object.value.blurMaxBlur,
      width: this.sizes.width,
      height: this.sizes.height,
    });
  }

  setFxaa() {
    this.renderPass = new RenderPass(this.scene, this.camera);
    this.renderPass.clearColor = new THREE.Color(0, 0, 0);
    this.renderPass.clearAlpha = 0;

    this.fxaaPass = new ShaderPass(FXAAShader);

    this.fxaaPass.material.uniforms['resolution'].value.x =
      1 / (this.sizes.width * this.sizes.pixelRatio);

    this.fxaaPass.material.uniforms['resolution'].value.y =
      1 / (this.sizes.height * this.sizes.pixelRatio);

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(this.renderPass);
    this.composer.addPass(this.fxaaPass);
  }

  setBloom() {
    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(this.sizes.width, this.sizes.height),
      1.5,
      0.4,
      0.85
    );
    this.bloomPass.threshold = 0.001;
    this.bloomPass.strength = 0.12;
    1;
    this.bloomPass.radius = 0;
  }

  setComposer() {
    this.renderPass = new RenderPass(this.scene, this.camera);
    this.renderPass.clearColor = new THREE.Color(0, 0, 0);
    this.renderPass.clearAlpha = 0;

    this.composer = new EffectComposer(this.renderer);
    // this.composer.setSize(this.sizes.width, this.sizes.height);
    this.composer.addPass(this.renderPass);
    //this.composer.addPass(this.bokehPass);
    this.composer.addPass(this.fxaaPass);
    //this.composer.addPass(this.bloomPass);
  }

  update() {
    // this.bokehPass.uniforms.maxblur.value =
    //   this.experience.object.value.blurMaxBlur;

    // this.bokehPass.uniforms.focus.value =
    //   this.experience.object.value.blurFocus;

    // this.bokehPass.uniforms.aperture.value =
    //   this.experience.object.value.blurAperture;

    this.composer.render();
  }
}
