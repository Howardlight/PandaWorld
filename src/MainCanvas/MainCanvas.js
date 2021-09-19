import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { softShadows, OrbitControls, Sky } from "@react-three/drei";
import Effects from "./Effects";
import Light from "./Light";
import MainMesh from "./ObjectMesh/MainMesh";

// Zustand, handles isHidden State
import { useStore } from "../redux/store/ZustandStore";
import { Physics, usePlane } from "@react-three/cannon";


function Plane(props) {
  const [ref, api] = usePlane(() => ({rotation: [-Math.PI /2, 0, 0], position: [0, -3, 0], ...props}));
  return (
    <mesh 
    receiveShadow
    // rotation={[-Math.PI / 2, 0, 0]} 
    // position={[0, -3, 0]}
    ref={ref}
    >
      <planeBufferGeometry attach="geometry" args={[250, 250]} />
      <shadowMaterial attach="material" opacity={0.3} />
      <meshStandardMaterial attach="material" color={"#FFCAF6"} />
    </mesh>
  )
}

// function Cube(props) {
//   const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0], ...props }))
//   return (
//     <mesh ref={ref}>
//       <boxBufferGeometry />
//     </mesh>
//   )
// }

// function Marble() {
//   const [ref] = useSphere(() => ({
//     mass: 10,
//     position: [2, 5, 0]
//   }));

//   return (
//     <mesh ref={ref} castShadow>
//       <sphereBufferGeometry
//         attach="geometry"
//         args={[1, 32, 32]}
//       ></sphereBufferGeometry>
//       <meshStandardMaterial color="white" />
//     </mesh>
//   );
// }

// Softens the Shadows
softShadows();
const MainCanvas = () => {

  // visibility-Zustand
  const   isHidden = useStore(state => state.isHidden);
  return (
    <Canvas shadows colorManagement camera={{ position: [-5, 2, 10], fov: 60 }}>

      <fog attach="fog" args={['#f0f0f0', 20, 40]} />
      <group>

        {/* <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
          <planeBufferGeometry attach="geometry" args={[250, 250]} />
          <shadowMaterial attach="material" opacity={0.3} />
          <meshStandardMaterial attach="material" color={"#FFCAF6"} />
        </mesh> */}
        <Physics>
          <Suspense fallback={null}>
            <Plane />
            { isHidden ? "" : <MainMesh args={[2, 2, 2]} position={[0, 10, 0]} />}
          </Suspense>
        </Physics>
      </group>
      <Light />
      <Effects />
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
