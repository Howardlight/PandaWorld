import React, { useRef, useState} from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";

const SpinningMesh = ({position, args}) => {
    const [expand, setExpand] = useState(false);
    

    const mesh = useRef(null);
    useFrame( () => {mesh.current.rotation.x = mesh.current.rotation.y += 0.007});
  
    const [apandahTexture] = useTexture([process.env.PUBLIC_URL + "/Apandah.jpg"]);
    
  
    const props = useSpring({
      scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
    });
  
    return(
        <a.mesh onClick={() => setExpand(!expand)} scale={props.scale} castShadow position={position} ref={mesh}>
          <boxBufferGeometry attach="geometry" args={args} />
          <meshStandardMaterial attach="material" map={apandahTexture} factor={0.3} />
        </a.mesh>
    );
}

export default SpinningMesh;