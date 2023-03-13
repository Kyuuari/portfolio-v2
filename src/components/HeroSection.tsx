import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Loader, Html } from "@react-three/drei";
import * as THREE from "three";
import { Mesh } from "three";
// import { LayerMaterial, Depth, Noise } from "lamina";

export function HeroSection() {
  return (
    <div id="home" className="h-screen">
      <Canvas dpr={[1, 2]} className="">
        <Suspense fallback={<Loader />}>
          {/* <Bg /> */}
          <Objects />
          <Html center className="">
            <article className="grid h-full w-full grow place-items-center">
              <div className="max-w-[30ch] p-10">
                <h1 className="text-5xl font-bold">Developer + Designer</h1>
                <p className="">
                  Hi 👋, I&apos;m a computer science student from sheridan
                  college who loves merging creativity with technology. I
                  specialize in designing and developing web and mobile
                  applications.
                </p>
              </div>
            </article>
          </Html>
          <Rig />
        </Suspense>
      </Canvas>
    </div>
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
      {/* <pointLight color="blue" position={[8, -25, 5]} intensity={20} /> */}
      {/* <pointLight
        color="red"
        position={[0, -height * 2.25, 5]}
        intensity={10}
      /> */}
      <mesh ref={ref}>
        <boxGeometry />
        <meshBasicMaterial color="red" wireframe />
      </mesh>
    </>
  );
}

// function Bg() {
//   return (
//     <mesh scale={100}>
//       <boxGeometry args={[1, 1, 1]} />
//       <LayerMaterial side={THREE.BackSide}>
//         <Depth
//           colorB="red"
//           colorA="skyblue"
//           alpha={1}
//           mode="normal"
//           near={130}
//           far={200}
//           origin={[100, 100, -100]}
//         />
//         <Noise
//           mapping="local"
//           type="white"
//           scale={1000}
//           colorA="white"
//           colorB="black"
//           mode="subtract"
//           alpha={0.2}
//         />
//       </LayerMaterial>
//     </mesh>
//   );
// }
