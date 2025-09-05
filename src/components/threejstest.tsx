"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls, GLTFLoader } from "three/examples/jsm/Addons.js";

export default function ThreeJsTest() {
  try {
    const myThreeCanvas = useRef(null);
    useEffect(() => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({
        canvas: myThreeCanvas.current!,
        alpha: true,
      });
      renderer.setSize(480, 240);
      // renderer.setSize(window.innerWidth, window.innerHeight);
      camera.position.setZ(-2);

      const skull = new GLTFLoader();

      let mixer: THREE.AnimationMixer;
      skull.load(
        "/skull.glb",
        (gltf) => {
          const model = gltf.scene;
          scene.add(model);
          mixer = new THREE.AnimationMixer(model);
          const clips = gltf.animations;
          // const clip = THREE.AnimationClip.findByName(clips, "HeadWobble");
          // const action = mixer.clipAction(clip!);
          // action.play();
          clips.forEach((clip) => {
            const action = mixer.clipAction(clip);
            action.play();
          });
        },
        undefined,
        (error) => console.log(error)
      );
      // const cube = new THREE.Mesh(geometry, material);
      // scene.add(cube);
      // cube.rotateX(34);
      // cube.rotateY(34);
      // cube.rotateZ(34);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
      const pointLight = new THREE.PointLight(0xffffff);
      pointLight.position.set(2, 2, 0);
      scene.add(ambientLight, pointLight);

      // const gridHelper = new THREE.GridHelper(200, 50);
      // const lightHelper = new THREE.PointLightHelper(pointLight);
      // scene.add(gridHelper, lightHelper);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = false;
      controls.enablePan = false;

      const clock = new THREE.Clock();
      function animate() {
        requestAnimationFrame(animate);
        if (mixer) {
          mixer.update(clock.getDelta());
        }
        controls.update();
        renderer.render(scene, camera);
      }
      animate();
    });

    return (
      <div className="flex justify-center">
        <canvas id="myThreeCanvas" ref={myThreeCanvas} />
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}
