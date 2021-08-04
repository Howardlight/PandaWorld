import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";

// import { useThree } from "@react-three/fiber";

const ApandahMesh = ({ position, args }) => {
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

  



  return (
    <a.mesh
      onClick={() => setExpand(!expand)}
      scale={props.scale}
      castShadow
      position={position}
      ref={mesh}
    >
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial
        attach="material"
        map={apandahTexture}
        factor={0.3}
      />
    </a.mesh>
  );
};

export default ApandahMesh;
