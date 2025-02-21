import React from "react";
import { Canvas } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

interface TechSphereProps {
  height?: string;
  width?: string;
}

const CoreSphere = () => {
  // Crear textura procedural para el planeta
  const planetTexture = new THREE.DataTexture(
    Float32Array.from(
      Array(256 * 256).map(() => (Math.random() > 0.65 ? 1 : 0))
    ),
    256,
    256,
    THREE.RedFormat,
    THREE.FloatType
  );
  planetTexture.needsUpdate = true;

  

  return (
    <group>
      {/* Atmósfera exterior brillante */}
      <Sphere args={[2.1, 64, 64]}>
        <meshPhongMaterial
          color="#00FFA3"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>

      {/* Grid tecnológico */}
      <Sphere args={[2.05, 32, 32]}>
        <meshBasicMaterial
          color="#00FFA3"
          wireframe
          transparent
          opacity={0.1}
          side={THREE.DoubleSide}
        />
      </Sphere>

      {/* Anillos energéticos */}
      <group rotation={[Math.PI / 6, 0, 0]}>
        {[2.4, 2.6, 2.8].map((radius, i) => (
          <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[radius, radius + 0.04, 128]} />
            <meshBasicMaterial
              color="#00FFA3"
              transparent
              opacity={0.2 - i * 0.05}
              side={THREE.DoubleSide}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
};

const TechSphere: React.FC<TechSphereProps> = ({
  height = "600px",
  width = "100%",
}) => {
  return (
    <div style={{ height, width, position: "relative" }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#00FFA3" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#004d40" />

        <CoreSphere />

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          rotateSpeed={0.5}
          zoomSpeed={0.5}
          minDistance={5}
          maxDistance={20}
        />
      </Canvas>
    </div>
  );
};

export default TechSphere;
