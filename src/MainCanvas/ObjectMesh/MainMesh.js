import React, { 
  useState, 
  // useRef 
} from "react";
import { 
  useFrame, 
  // useThree
 } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";
import { 
  // useBox, 
  // useCylinder, 
  useSphere, 
  // useConeTwistConstraint
 } from "@react-three/cannon";

import textureArr from "./Meshes";
import { useStore } from "../../redux/store/ZustandStore";

// DEPRECATED
function MainMesh (props) {
  // Gets relevant states from Zustand
  const texture = useStore(state => state.texture);
  const shape = useStore(state => state.shape);

  // declare State hook
  const [expand, setExpand] = useState(false);

  // NOTE: I have nooo idea what is wrong with this
  // but here's a working model of Physics:
  // https://codesandbox.io/s/react-three-cannon-demo-with-api-usage-mr25f?file=/src/App.js:327-646
  // https://maxrohde.com/2019/10/23/create-and-drag-shapes-with-three-js-react-and-cannon-js/
  // ARGS TAKES ONE NUMBER, NOT A LIST
  // useBox seems to work fine, but useSphere is very finiky
  const [sphereRef, sphereApi] = useSphere(() => ({ 
    mass: 1,
    position: props.position,

    args: props.args[0],
  }));

  // BOX REF
  // const [boxRef] = useBox(() => ({
  //   mass: 1,
  //   position: props.position,

  //   args: props.args,
  // }));

  // refreshes every frame
  useFrame(() => {
  });

  function handleOnClick() {
    setExpand(!expand);
    const randomImpulse = [
      Math.round(Math.random()) * 2 - 1,
      Math.random() * 5,
      Math.round(Math.random()) * 2 - 1
      ];
    sphereApi.applyImpulse(randomImpulse, [0, 0, 0]);
  }

  // This might not be very Optimized
  // TODO: Check drei for possible optimizations 
  // Creates 2 Arrays, one with the file names,
  // the other with the Paths
  let AvailableTextures = [];
  let AvailableTexturesPaths = [];
  for(let value of textureArr){
    AvailableTextures.push(value.name + "Texture");
    AvailableTexturesPaths.push("../../Assets/Images" + value.fileName);
  }
  AvailableTextures = useTexture(AvailableTexturesPaths);

  // Load Animations with spring
  // TODO: Fix Clipping with the ground on expand, if possible,
  // else remove it / replace it
  // TODO: Add reposition Button
  const springProps = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  // TODO: Export this or sum shit, it looks awful here
  // handles shape of Mesh, Sphere or Box
  function handleMeshShape() {   
    switch(shape) {
      case 0:
        return <boxBufferGeometry 
        attach="geometry" 
        args={props.args}
         />;
      case 1:
        return <sphereBufferGeometry 
        attach="geometry" 
        args={[props.args[0], (props.args[1] * 15), (props.args[2] * 13)]}
        />;
      case 2:
        return <coneBufferGeometry attach="geometry" args={[props.args[0], (props.args[1] * 3 ), (props.args[2] * 50)]} />
      case 3:
        return <cylinderBufferGeometry attach="geometry" args={[props.args[0], props.args[0], (props.args[1] * 3 ), (props.args[2] * 12)]} />
      case 4:
        return <dodecahedronBufferGeometry attach="geometry" args={[props.args[0], 0]} />
      case 5:
        return <icosahedronBufferGeometry attach="geometry" args={[props.args[0], 0]} />
      case 6:
        return <octahedronBufferGeometry attach="geometry" args={[props.args[0], 0]} />
      case 7:
        return <torusBufferGeometry attach="geometry" args={[(props.args[0] * 2), 1, (props.args[2] * 15), (props.args[0] * 15)]} />
      // Current Way it is set up,
      // if case is not recognized, do nothing
      default:
        console.log("DEFAULT DETECTED, THIS SHOULDN'T HAPPEN");
    }
  }

  return (
    <a.mesh
      scale={springProps.scale}
      castShadow
      ref={sphereRef}
      onClick={handleOnClick}
    >
      {handleMeshShape()}
      <meshStandardMaterial
        attach="material"

        map={
          AvailableTextures[texture]
        }

        factor={0.3}
        roughness={0.7}
      />
    </a.mesh>
  );
};

export default MainMesh;
