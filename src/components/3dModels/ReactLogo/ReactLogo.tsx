import { Float, useGLTF } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";

const ReactLogo = (props: MeshProps) => {
  const { nodes, materials } = useGLTF("models/react.glb");

  return (
    <Float floatIntensity={1}>
      <mesh position={[8, 8, 0]} scale={0.3} {...props} dispose={null}>
        <mesh
          geometry={(nodes["React-Logo_Material002_0"] as THREE.Mesh).geometry}
          material={materials["Material.002"]}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.392, 0.392, 0.527]}
        />
      </mesh>
    </Float>
  );
};

useGLTF.preload("models/react.glb");

export default ReactLogo;
