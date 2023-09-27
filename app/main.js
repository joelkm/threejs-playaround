import '/style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer(
  {
    canvas: document.getElementById('canvas'),
  }
);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const geometry = new THREE.ConeGeometry(10, 3, 16, 100)
const material = new THREE.MeshStandardMaterial({ color: 0xffffff })

const cone = new THREE.Mesh(geometry, material)

scene.add(cone)

const pointLight = new THREE.PointLight(0xff0000, 1, 100);
pointLight.position.set(5, 5, 6)
pointLight.intensity

const ambientLight = new THREE.AmbientLight(0x9F9F9F);

scene.add(pointLight, ambientLight)

const controls = new OrbitControls(camera, renderer.domElement)

function animate() {
  requestAnimationFrame(animate);

  cone.rotation.x += 0.01;
  cone.rotation.y += 0.005;
  cone.rotation.z += 0.01;

  controls.update();

  renderer.render(scene, camera)
}

animate();