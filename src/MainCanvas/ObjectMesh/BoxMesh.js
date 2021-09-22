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
  useBox, 
  // useCylinder, 
  // useSphere, 
  // useConeTwistConstraint
 } from "@react-three/cannon";


import { 
  getAvailableTexturePaths,
  getRandomImpulse,
} from "./Utils";
import { useStore } from "../../redux/store/ZustandStore";


function BoxMesh (props) {
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

  const [boxRef, boxApi] = useBox(() => ({
    mass: 1,
    position: props.position,

    args: props.args,
  }));

  // refreshes every frame
  // useFrame(() => {
  // });

  function handleOnClick() {
    // handles expanding the mesh
    setExpand(!expand);
    // if Mesh is not expanded next impulse will be 3x stronger
    const randomImpulse = expand ? getRandomImpulse(1) : getRandomImpulse(3); 
    boxApi.applyImpulse(randomImpulse, [0, 0, 0]);
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
      ref={boxRef}
      onClick={handleOnClick}
    >
      <boxBufferGeometry attach="geometry" args={props.args} />;
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

export default BoxMesh;
