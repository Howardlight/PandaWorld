import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";


const ApandahMesh = ({ position, args, isCircle }) => {
  // declare State hook
  const [expand, setExpand] = useState(false);

  // Refresh every Frame
  const mesh = useRef(null);
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.007;
  });

  // load Apandah Texture
  const [apandahTexture] = useTexture([
    process.env.PUBLIC_URL + "/Apandah.jpg",
  ]);

  // Load Animations with spring
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  // handles shape of Mesh, Sphere or Box
  function handleMeshShape() {   
    if(isCircle) return <sphereBufferGeometry attach="geometry" args={[args[0], (args[1] * 15), (args[2] * 13)]}  />;
    // ^^^ NOTE: this formula might need changing in the future
    else return <boxBufferGeometry attach="geometry" args={args} />;
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
        map={apandahTexture}
        factor={0.3}
        roughness={0.7}
      />
    </a.mesh>
  );
};

export default ApandahMesh;
