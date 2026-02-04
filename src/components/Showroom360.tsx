"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";

function CarModel() {
    // Placeholder for an actual 3D GLTF model
    // Using a shiny box to represent a car for now
    return (
        <mesh position={[0, 0.5, 0]}>
            <boxGeometry args={[2, 1, 4]} />
            <meshStandardMaterial
                color="#1A1A1A"
                metalness={0.8}
                roughness={0.2}
            />
        </mesh>
    );
}

function ShowroomScene() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                intensity={100}
                castShadow
            />

            <CarModel />

            {/* Floor Reflections */}
            <ContactShadows
                resolution={1024}
                scale={20}
                blur={2}
                opacity={0.5}
                far={10}
                color="#000000"
            />

            {/* Studio Lighting Environment */}
            <Environment preset="city" />
        </>
    );
}

export default function Showroom360() {
    return (
        <div className="w-full h-screen bg-bbt-black">
            <Canvas shadows camera={{ position: [5, 2, 5], fov: 50 }}>
                <Suspense fallback={null}>
                    <ShowroomScene />
                </Suspense>
                <OrbitControls
                    autoRotate
                    autoRotateSpeed={0.5}
                    enablePan={false}
                    enableZoom={true}
                    maxPolarAngle={Math.PI / 2} // Restrict camera from going under the floor
                />
            </Canvas>
        </div>
    );
}
