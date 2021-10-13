import React, { useRef, useState } from "react";
import { Suspense } from 'react';

import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

import Shield from './Shield.jsx';
// import ShieldControl from './ShieldControl.jsx';
import { OrbitControls, Stars, Environment } from '@react-three/drei';



export default () => {


    return (
    <Canvas>
        <Suspense fallback={null}>
            <Shield url="/assets/Shield1/scene.gltf"  />
            <Environment
            background={true} // Whether to affect scene.background
            preset={'forest'} // Preset string (overrides files and path)
            // scene={undefined} // adds the ability to pass a custom THREE.Scene
            />
        </Suspense>
        <ambientLight intensity={1} />
        {/* <pointLight position={[10, 10, 10]} /> */}
        {/* <Stars
        radius={100} // Radius of the inner sphere (default=100)
        depth={50} // Depth of area where stars should fit (default=50)
        count={5000} // Amount of stars (default=5000)
        factor={10} // Size factor (default=4)
        saturation={0} // Saturation 0-1 (default=0)
        fade // Faded dots (default=false)
        /> */}
        <OrbitControls
        enableRotate={true}
        autoRotate={false}
        // autoRotateSpeed={0.5}
        enableZoom={false}
        />
    </Canvas>
    );
}