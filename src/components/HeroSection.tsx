import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Loader, Html, Points, Point } from "@react-three/drei";
import * as THREE from "three";
import { Mesh } from "three";

export function HeroSection() {
  return (
    <div id="home" className="h-screen">
      <Canvas className="bg-base-100">
        <Suspense fallback={<Loader />}>
          <>
            <Objects />
            {/* <Particles/> */}
            <Html fullscreen>
              <article className="grid h-screen w-screen grow place-items-center">
                <div className="max-w-[30ch] p-10">
                  <h1 className="text-5xl font-bold">Developer + Designer</h1>
                  <p className="">
                    Hi, I&apos;m a computer science student from sheridan
                    college who loves merging creativity with technology. I
                    specialize in designing and developing web and mobile
                    applications.
                  </p>
                </div>
              </article>
            </Html>
            {/* <Caption>{`THE\nSEVENTY-TWO\nNAMES\nOF GOD.`}</Caption> */}
            <Rig />
          </>
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
  const { height } = useThree((state) => state.viewport);
  const ref = useRef<Mesh>(null!);
  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });
  //   const ref = useRef();
  //   useFrame((state, delta) => (ref.current.rotation.y += 0.01));
  return (
    <>
      <pointLight color="blue" position={[8, -25, 5]} intensity={20} />
      <pointLight
        color="red"
        position={[0, -height * 2.25, 5]}
        intensity={10}
      />
      <mesh ref={ref}>
        <boxGeometry />
        <meshBasicMaterial color="red" wireframe />
      </mesh>
    </>
  );
}

const particleColors = [
  "#673ab7",
  "#f4b677",
  "orange",
  "blue",
  "#8bc34a",
  "purple",
];

function Particles({ size = 2000 }) {
  const { width, height } = useThree((state) => state.viewport);
  return (
    <Points limit={size}>
      <pointsMaterial size={0.05} vertexColors />
      {Array.from({ length: size }).map((_, i) => (
        <Point
          key={i}
          position={[
            (0.5 - Math.random()) * width * 2,
            0.5 * height + Math.random() ** 0.25 * height * -3,
            (0.5 - Math.random()) * 25,
          ]}
          color={
            particleColors[
              Math.floor(Math.random() * (particleColors.length - 1))
            ]
          }
        />
      ))}
    </Points>
  );
}

// function Caption({ children }) {
//   const { width } = useThree((state) => state.viewport);
//   return (
//     <>
//       <Text
//         position={[0, 0, -5]}
//         lineHeight={0.8}
//         font="/Ki-Medium.ttf"
//         fontSize={width / 2}
//         material-toneMapped={false}
//         anchorX="center"
//         anchorY="middle"
//       >
//         {children}
//       </Text>
//     </>
//   );
// }
