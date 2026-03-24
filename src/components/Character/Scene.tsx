import { Canvas } from "@react-three/fiber";
import { Float, Environment, MeshTransmissionMaterial } from "@react-three/drei";
import { useEffect } from "react";
import { useLoading } from "../../context/LoadingProvider";

const Shapes = () => {
  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#00d2ff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
      
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-3, 1.5, -3]}>
          <torusGeometry args={[1, 0.3, 16, 32]} />
          <MeshTransmissionMaterial backside color="#00d2ff" roughness={0.1} transmission={1} thickness={1} />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[3, -1, -4]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshPhysicalMaterial color="#8b5cf6" metalness={0.9} roughness={0.1} clearcoat={1} clearcoatRoughness={0.1} />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={2.5}>
        <mesh position={[0, -2, -2]}>
          <icosahedronGeometry args={[1.5, 0]} />
          <meshPhysicalMaterial color="#ffffff" metalness={0.7} roughness={0.1} wireframe={true} />
        </mesh>
      </Float>
      
      <Float speed={1.8} rotationIntensity={1.8} floatIntensity={2}>
        <mesh position={[2, 2.5, -5]}>
          <octahedronGeometry args={[0.8, 0]} />
          <meshPhysicalMaterial color="#fcd34d" metalness={1} roughness={0} clearcoat={1} />
        </mesh>
      </Float>
    </>
  );
};

const Scene = () => {
  const { setLoading } = useLoading();
  
  useEffect(() => {
    // Quickly mock loading since we aren't loading heavy GLTF files anymore
    setLoading(100);
  }, [setLoading]);

  return (
    <div className="character-container" style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}>
        <Shapes />
      </Canvas>
    </div>
  );
};

export default Scene;