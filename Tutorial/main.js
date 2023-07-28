//imports three.js for animation
import * as THREE from 'three'

//creates new scene and sets up camara for animation - each animation must require these for setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//renders WebGL environment - three.js is based off of WebGL and default color is black
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor (0xddddff, 1);
document.body.appendChild( renderer.domElement );

//creates shape (torus in this case) and material (texture) and adds to scene - add defaults for no parameters or add parameters manually
//light shows shades of 
const geometry = new THREE.TorusGeometry();
const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
const light = new THREE.DirectionalLight(0xffffff);
const light2 = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
const torus = new THREE.Mesh(geometry, material);
scene.add(light);
scene.add(light2);
scene.add(torus);

//sets camara position to determine distance
camera.position.z = 5;

//animates torus by moving x and y positions
function animate() {
	requestAnimationFrame( animate );
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
	renderer.render(scene, camera);
}

//runs animate function
animate();