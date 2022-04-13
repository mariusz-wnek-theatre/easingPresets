import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import './styles.css';

import YellowSphere from './components/three/yellowSphere';

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  1,
  1000
);

camera.position.z = 1;

const scene = new THREE.Scene();

scene.background = new THREE.Color(0xded9d0);

const yellowSphere = new YellowSphere();
yellowSphere.render();

const orangeGeometry = new THREE.SphereGeometry(10, 64, 32);
const orangeMaterial = new THREE.MeshBasicMaterial({
  color: 'rgb(237, 147, 94)',
});
const orangeSphere = new THREE.Mesh(orangeGeometry, orangeMaterial);
scene.add(orangeSphere);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
requestAnimationFrame(animation);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
console.log(controls);
camera.position.set(0, 20, 100);
controls.update();

window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Animation

function animation() {
  requestAnimationFrame(animation);

  controls.update();
  renderer.render(scene, camera);
}
