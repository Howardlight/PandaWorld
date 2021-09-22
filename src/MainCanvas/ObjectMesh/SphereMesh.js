import React, { 
  useState, 
  // useRef 
} from "react";
// import { 
//   useFrame, 
//   useThree
//  } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";
import { 
  // useBox, 
  // useCylinder, 
  useSphere, 
  // useConeTwistConstraint
 } from "@react-three/cannon";

import { 
  getAvailableTexturePaths,
  getRandomImpulse,  
} from "./Utils";
import { useStore } from "../../redux/store/ZustandStore";

function MainMesh (props) {
  // Gets relevant states from Zustand
  const texture = useStore(state => state.texture);

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


  // refreshes every frame
  // useFrame(() => {
  // });

  function handleOnClick() {
    // handles expanding the mesh
    setExpand(!expand);
    // if Mesh is not expanded next impulse will be 3x stronger
    const randomImpulse = expand ? getRandomImpulse(1) : getRandomImpulse(3); 
    sphereApi.applyImpulse(randomImpulse, [0, 0, 0]);
  }

  // GET TEXTURES AND INIT THEM
  let textureContents = getAvailableTexturePaths(); // gets both the AvailableTextures output + their PATHS
  let availableTextures = textureContents[0];
  availableTextures = useTexture(textureContents[1]); 

  // Load Animations with spring
  const springProps = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });


  return (
    <a.mesh
      scale={springProps.scale}
      castShadow
      ref={sphereRef}
      onClick={handleOnClick}
    >
      <sphereBufferGeometry attach="geometry" args={[props.args[0], (props.args[1] * 15), (props.args[2] * 13)]} />;
      <meshStandardMaterial
        attach="material"

        map={
          availableTextures[texture]
        }

        factor={0.3}
        roughness={0.7}
      />
    </a.mesh>
  );
};

export default MainMesh;
