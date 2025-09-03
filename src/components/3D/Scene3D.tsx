import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Particles: React.FC<{ count: number }> = ({ count }) => {
  const mesh = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      
      colors[i * 3] = Math.random();
      colors[i * 3 + 1] = Math.random() * 0.5 + 0.5;
      colors[i * 3 + 2] = 1;
    }
    
    return [positions, colors];
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Points ref={mesh} positions={positions} colors={colors}>
      <PointMaterial
        transparent
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        vertexColors={true}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const FloatingGeometry: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.5;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.3;
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <octahedronGeometry args={[0.3, 0]} />
      <meshStandardMaterial
        color="#00d4ff"
        transparent
        opacity={0.6}
        wireframe
      />
    </mesh>
  );
};

const MouseTracker: React.FC = () => {
  const { mouse, viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x = mouse.y * viewport.height * 0.05;
      groupRef.current.rotation.y = mouse.x * viewport.width * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <FloatingGeometry position={[-2, 1, -1]} />
      <FloatingGeometry position={[2, -1, -2]} />
      <FloatingGeometry position={[0, 2, -1.5]} />
      <FloatingGeometry position={[-1.5, -2, -1]} />
    </group>
  );
};

const Scene3D: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 scene3d-bg">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.5} />
        <Particles count={1000} />
        <MouseTracker />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;