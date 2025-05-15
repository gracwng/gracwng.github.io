import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// initialize scene 
const scene = new THREE.Scene();

// add objects to the scene
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 'pink' } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// initialize camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

// initialize renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// instantiate the controls
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.autoRotate = true
function animate() {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render( scene, camera );
}
// renderer.setAnimationLoop( animate );