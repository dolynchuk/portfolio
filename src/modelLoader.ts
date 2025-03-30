import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

export function loadPlayerModel(url: string, scene: THREE.Scene) {
  const loader = new GLTFLoader();
  let playerModel: THREE.Group | null = null;

  loader.load(
    url,
    (gltf) => {
      playerModel = gltf.scene.clone();
      if (!playerModel){
        return;
      }
      playerModel.position.set(-2, 0, 0);
      playerModel.scale.set(1, 1, 1);

      playerModel.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          assignMaterial(child);
        }
      });

      scene.add(playerModel);
    },
    undefined,
    (error) => {
      console.error("GLTF loading failed:", error);
    }
  );

  let playerRotationTime = 0;
  let cloudRotationTime = 0;


  return () => {
    playerRotationTime += 0.005;
    const rotationAmplitude = 0.5;
    if (!playerModel){
      return;
    }
    playerModel.rotation.y = Math.sin(playerRotationTime) * rotationAmplitude;
    const heightAmplitude = 1;
    const baseHeight = 0;
    playerModel.position.y = baseHeight + Math.abs(Math.cos(playerRotationTime)) * heightAmplitude;     

    playerModel.traverse((child) => {
      if (child.name === 'CLOUD') {
        cloudRotationTime += 0.01;
        const rotationAmplitude = 0.5;
        child.rotation.y = Math.cos(playerRotationTime) * rotationAmplitude;
      }
    })
  };
}

function assignMaterial(child: THREE.Mesh) {
  const clothesMaterial = new THREE.MeshPhysicalMaterial({ color: 'yellow', emissive: 'yellow', emissiveIntensity: 0.1 });
  if (child.name.includes("HAT")) {
    child.material = clothesMaterial;
  } 
  if (child.name === 'TABLE'){
    child.material = new THREE.MeshPhysicalMaterial({color: 'magenta', opacity: 1, metalness: 0.1, transparent: true})
  }
  if (child.name === 'HEAD'){
    child.material = new THREE.MeshPhysicalMaterial({color: '#ffeedd', roughness: 1});
  }
  if (child.name === 'HANDS'){
    child.material = new THREE.MeshPhysicalMaterial({color: '#ffeedd', roughness: 1});
  }
  if (child.name === 'PANTS'){
    child.material = clothesMaterial;
  }
  if (child.name === 'shirt'){
    child.material = new THREE.MeshPhysicalMaterial({color: 'white', roughness: 1});
  }
  if (child.name.includes("CLOUD")) {
    child.material = new THREE.MeshPhysicalMaterial({ color: 'white', emissive: 'white', emissiveIntensity: 0.5 });
  }
  if (child.name === 'Leaf'){
    child.material = new THREE.MeshPhysicalMaterial({ color: 'lightgreen' });
  }
  if (child.name === 'Girls_in_STEM'){
    child.material = new THREE.MeshPhysicalMaterial({ color: 'brown' });
  }
  if (child.name.includes('blob')){
    child.material = new THREE.MeshPhysicalMaterial({ color: 'lightblue' });
  }
}
