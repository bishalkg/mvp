import React, { useRef, useState } from "react";
import { Canvas, useFrame } from '@react-three/fiber';

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export default ({url}) => {
  const gltf = useLoader(GLTFLoader, url)

  const [size, setSize] = useState(1.5);

  return (
    <primitive object={gltf.scene} onClick={setSize(2.0)} scale={1.5} position={[0, 0, 0]} />
  )
}