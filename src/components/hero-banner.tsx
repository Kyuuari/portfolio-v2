import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { Mesh } from "three";

export function HeroBanner() {
  return (
    <Canvas dpr={[1, 2]}>
      <Objects />
      <Html center className="">
        <section className="grid h-full w-full grow place-items-center">
          <div className="max-w-[30ch] p-10">
            <h1 className="text-5xl font-bold">Developer + Designer</h1>
            <p className="">
              Hi 👋, I&apos;m a computer science student from sheridan college
              who loves merging creativity with technology. I specialize in
              designing and developing web and mobile applications.
            </p>
          </div>
        </section>
      </Html>
      <Rig />
    </Canvas>
  );
}

export function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(state.mouse.x / 2, state.mouse.y / 2, 10),
      0.05
    );
  });
}

export function Objects() {
  // const { height } = useThree((state) => state.viewport);
  const ref = useRef<Mesh>(null!);
  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });
  return (
    <>
      <mesh ref={ref}>
        <boxGeometry />
        <meshBasicMaterial color="red" wireframe />
      </mesh>
    </>
  );
}
