import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";

import textureArr from "./Meshes";

import { useSelector } from "react-redux";
import { useStore } from "../redux/store/ZustandStore";

const MainMesh = ({ position, args, shape}) => {

  // const texture = useSelector((state) => state.texture.value)
  // const isHidden = useSelector((state) => state.hidden.value);
  const texture = useStore(state => state.texture);
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


      // Current Way it is set up,
      // if case is not recognized, do nothing
      default:
        break;
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
