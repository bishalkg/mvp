import React, { useRef, useState } from "react";
import { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';

import Shield from './Shield.jsx';
import ShieldControl from './ShieldControl.jsx';

export default () => {
    return (
    <Canvas>
        <Suspense fallback={null}>
            <Shield url="/assets/Shield1/scene.gltf"  />
        </Suspense>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <ShieldControl />
    </Canvas>
    );
}