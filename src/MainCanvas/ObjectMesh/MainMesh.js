import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";

import textureArr from "./Meshes";
import { useStore } from "../../redux/store/ZustandStore";

const MainMesh = ({ position, args}) => {


  const texture = useStore(state => state.texture);
  const shape = useStore(state => state.shape);
  
  // declare State hook
  const [expand, setExpand] = useState(false);

  // Refresh every Frame
  const mesh = useRef(null);
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.007;
  });


  // This might not be very Optimized
  // TODO: Check drei for possible optimizations 
  // Creates 2 Arrays, one with the file names,
  // the other with the Paths
  let AvailableTextures = [];
  let AvailableTexturesPaths = [];
  for(let value of textureArr){
    AvailableTextures.push(value.name + "Texture");
    AvailableTexturesPaths.push(process.env.PUBLIC_URL + value.fileName);
  }
  
  AvailableTextures = useTexture(AvailableTexturesPaths);



  // Load Animations with spring
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });


  // TODO: Add More Shapes
  // TODO: Maybe port this to the Slidebar?

  // handles shape of Mesh, Sphere or Box
  function handleMeshShape() {   

    switch(shape) {
      
      case 0:
        return <boxBufferGeometry attach="geometry" args={args} />;
      case 1:
        return <sphereBufferGeometry attach="geometry" args={[args[0], (args[1] * 15), (args[2] * 13)]} />;
      case 2:
        return <coneBufferGeometry attach="geometry" args={[args[0], (args[1] * 3 ), (args[2] * 50)]} />
      case 3:
        return <cylinderBufferGeometry attach="geometry" args={[args[0], args[0], (args[1] * 3 ), (args[2] * 12)]} />
      case 4:
        return <dodecahedronBufferGeometry attach="geometry" args={[args[0], 0]} />
      case 5:
        return <icosahedronBufferGeometry attach="geometry" args={[args[0], 0]} />
      case 6:
        return <octahedronBufferGeometry attach="geometry" args={[args[0], 0]} />
      case 7:
        return <torusBufferGeometry attach="geometry" args={[(args[0] * 2), 1, (args[2] * 15), (args[0] * 15)]} />
      

      // Current Way it is set up,
      // if case is not recognized, do nothing
      default:
        console.log("DEFAULT DETECTED, THIS SHOULDN'T HAPPEN")
    }
  }

  return (
    <a.mesh
      onClick={() => setExpand(!expand)}
      scale={props.scale}
      castShadow
      position={position}
      ref={mesh}
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
