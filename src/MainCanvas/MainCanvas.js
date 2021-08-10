import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { softShadows, OrbitControls, Sky } from "@react-three/drei";
import {
  EffectComposer,
  DepthOfField,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import MainMesh from "./MainMesh";

// Zustand, handles isHidden State
import { useStore } from "../redux/store/ZustandStore";


// Softens the Shadows
softShadows();

const MainCanvas = () => {

  // visibility-Zustand
  const   isHidden = useStore(state => state.isHidden);

  return (
    <Canvas shadows colorManagement camera={{ position: [-5, 2, 10], fov: 60 }}>
      <ambientLight intensity={0.2} />

      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      <fog attach="fog" args={['#f0f0f0', 20, 40]} />
      <group>

        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
          <planeBufferGeometry attach="geometry" args={[250, 250]} />
          <shadowMaterial attach="material" opacity={0.3} />
          <meshStandardMaterial attach="material" color={"#FFCAF6"} />
        </mesh>

        <Suspense fallback={null}>

          { isHidden ? "" : <MainMesh position={[0, 1, 0]} args={[2, 2, 2]} /> }

        </Suspense>

      </group>

      <EffectComposer multisampling={0} disableNormalPass={true}>
        <DepthOfField
          focusDisctance={1}
          focalLength={0.07}
          bokehScale={3}
          height={480}
        />
        {/* <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} /> */}
        <Noise opacity={0.02} />


        {/* TIP: SMAA Fucked up the Vignette last time, Watch out */}
        <Vignette
          offset={0.5} // vignette offset
          darkness={0.5} // vignette darkness
          eskil={false} // Eskil's vignette technique
          blendFunction={BlendFunction.NORMAL} // blend mode
        />

      </EffectComposer>
      <OrbitControls />  

      <Sky
        distance={450000}
        sunPosition={[5, 1, -6]}
        Inclination={0}
        azimuth={100} // what does this even do?????
        rayleigh={0.2}
        // for more methods check : https://threejs.org/examples/webgl_shaders_sky.html
      />
    </Canvas>
  );
};

export default MainCanvas;
