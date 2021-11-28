import React, { Suspense } from "react";

// Three Fiber Drei Cannon Imports
import { Canvas } from "@react-three/fiber";
import { softShadows, OrbitControls, Sky, Stars} from "@react-three/drei";
import { 
  Physics,
  usePlane,
  // Debug
} from "@react-three/cannon";

// Canvas Objects and Configs
import Effects from "./Effects";
import Light from "./Light";

// import MainMesh from "./ObjectMesh/MainMesh";
import BoxMesh from "./ObjectMesh/BoxMesh";
import SphereMesh from "./ObjectMesh/SphereMesh";
// import CylinderMesh from "./ObjectMesh/CylinderMesh";

// Zustand, handles isHidden State
import { useStore } from "../redux/store/ZustandStore";


function Plane(props) {
  const [ref] = usePlane(() => ({rotation: [-Math.PI /2, 0, 0], position: [0, -3, 0], ...props}));
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

// Softens the Shadows
softShadows();
const MainCanvas = () => {

  // visibility-Zustand
  const   isHidden = useStore(state => state.isHidden);
  // shape-Zustand
  const shape = useStore(state => state.shape);

  // TODO: PORT IMAGES USED AS TEXTURES TO SRC, INSIDE ASSETS/IMAGES
  // this is so they can benefit from the webpack and reduce the bundle size


  // Swaps between the shapes
  function handleMeshLoading() {
    switch(shape) {
      case 0:
        return isHidden ? "" : <BoxMesh args={[2, 2, 2]} position={[0, 10, 0]} />;
      case 1:
        return isHidden ? "" : <SphereMesh args={[2, 2, 2]} position={[0, 10, 0]} />;
      // case 3:
      //   return isHidden ? "" : <CylinderMesh args={[2, 2, 2]} position={[0, 10, 0]} />;
      default:
        return "";
    }
  }

  return (
    <Canvas shadows colorManagement camera={{ position: [-10, 0, 0], fov: 65 }}>

      <fog attach="fog" args={['#f0f0f0', 20, 40]} />
      <group>
        <Physics>
          <Suspense fallback={null}>
            {/* <Debug > */}
              <Plane />
              {handleMeshLoading()}
            {/* </Debug> */}
          </Suspense>
        </Physics>
      </group>
      <Light />
      <Effects />
      <OrbitControls />  


      <Stars
      radius={100} // Radius of the inner sphere (default=100)
      depth={50} // Depth of area where stars should fit (default=50)
      count={5000} // Amount of stars (default=5000)
      factor={4} // Size factor (default=4)
      saturation={0} // Saturation 0-1 (default=0)
      fade // Faded dots (default=false)
      />

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
