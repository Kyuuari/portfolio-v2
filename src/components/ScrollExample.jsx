import {
  Scroll,
  ScrollControls,
  Point,
  Points,
  useIntersect,
  Html,
  useProgress,
  Loader,
} from "@react-three/drei";
import { useFrame, Canvas, useThree } from "@react-three/fiber";
import React, { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";
// import { Model } from "./Foresthome";
// import { Perf } from "r3f-perf";
// import {
//   EffectComposer,
//   DepthOfField,
//   Bloom,
//   Noise,
//   Vignette,
//   Glitch,
// } from "@react-three/postprocessing";
// import Projects from "./Projects";
// import LayoutFooter from "./LayoutFooter";

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

function Objects() {
  const { height, width } = useThree((state) => state.viewport);
  const mainBox = useRef();
  useFrame((state, delta) => (mainBox.current.rotation.y += 0.01));
  return (
    <>
      <pointLight color="blue" position={[8, -25, 5]} intensity={20} />
      <pointLight
        color="red"
        position={[0, -height * 2.25, 5]}
        intensity={10}
      />
      <mesh ref={mainBox}>
        <boxGeometry />
        <meshBasicMaterial color="red" wireframe />
      </mesh>
      <Item color="blue" position={[width / 6, -height * 1, 0]}>
        <dodecahedronGeometry />
      </Item>
      <Item color="gray" position={[-width / 5, -height * 1.8, -2]}>
        <coneGeometry args={[1, 1, 6]} />
      </Item>
      <Item color="purple" position={[width / 4, -height * 2, 0]}>
        <coneGeometry args={[1.5, 2, 3]} />
      </Item>
      <Item color="orange" position={[-width / 12, -height * 2.25, 0.5]}>
        <coneGeometry args={[0.75, 2.5, 12]} />
      </Item>
    </>
  );
}

function Item({ color, position, children }) {
  const visible = useRef();
  // console.log(useIntersect((isVisible) => (visible.current = isVisible)));
  const ref = useIntersect((isVisible) => (visible.current = isVisible));

  //random x y position factor
  const [xRandomFactor, yRandomFactor] = useMemo(
    () => [(0.5 - Math.random()) * 0.5, (0.5 - Math.random()) * 0.5],
    []
  );

  //for scaling into view
  useFrame(({ clock }, delta) => {
    const elapsedTime = clock.getElapsedTime();
    ref.current.rotation.x = elapsedTime * xRandomFactor;
    ref.current.rotation.y = elapsedTime * yRandomFactor;
    const scale = THREE.MathUtils.damp(
      ref.current.scale.x,
      visible.current ? 1.5 : 0.2,
      5,
      delta
    );
    ref.current.scale.set(scale, scale, scale);
  });
  return (
    <mesh ref={ref} position={position}>
      {children}
      <meshPhysicalMaterial transparent color={color} />
    </mesh>
  );
}

function Content() {
  return (
    <div className="">
      <article className="grid h-screen w-screen grow place-items-center">
        <div className="max-w-[30ch] p-10">
          <h1 className="text-5xl font-bold">Developer + Designer</h1>
          <p className="">
            Hi, I’m a computer science student from sheridan college who likes
            to merge creativity with technoogy. I design and develop
            applications for web and mobile.
          </p>
        </div>
      </article>
      {/* <article className="grid h-screen w-screen grow place-items-center bg-base-100 bg-opacity-60 bg-clip-padding backdrop-blur-sm backdrop-filter">
        <div className="p-10">
          <h2 className="text-5xl font-bold">Projects</h2>
        </div>
      </article> */}
      {/* <article className="grid h-screen w-screen grow place-items-center bg-base-100">
        <div className="p-10">
          <h2 className="text-5xl font-bold">Projects</h2>
        </div>
      </article> */}

      <article className="grid h-screen w-screen grow place-items-center">
        <div className="max-w-[30ch] p-10">
          <h2 className="text-5xl font-bold">About Me</h2>
          <p className="text-base">
            Hi, I’m a computer science student from sheridan college who likes
            to merge creativity with technoogy. I design and develop
            applications for web and mobile.
          </p>
        </div>
      </article>

      <article className="grid h-screen w-screen grow place-items-center bg-orange-400 bg-opacity-20">
        <h2 className="text-5xl">Projects</h2>
        <div className="flex flex-wrap content-center gap-4">
          <div className="max-w-[30ch] flex-initial rounded bg-white p-10">
            <h2 className="text-5xl font-bold">About Me</h2>
            <p className="text-base">
              Hi, I’m a computer science student from sheridan college who likes
              to merge creativity with technoogy. I design and develop
              applications for web and mobile.
            </p>
          </div>

          <div className="max-w-[30ch] flex-initial rounded bg-white p-10">
            <h2 className="text-5xl font-bold">About Me</h2>
            <p className="text-base">
              Hi, I’m a computer science student from sheridan college who likes
              to merge creativity with technoogy. I design and develop
              applications for web and mobile.
            </p>
          </div>

          <div className="max-w-[30ch] flex-initial rounded bg-white p-10">
            <h2 className="text-5xl font-bold">About Me</h2>
            <p className="text-base">
              Hi, I’m a computer science student from sheridan college who likes
              to merge creativity with technoogy. I design and develop
              applications for web and mobile.
            </p>
          </div>

          <div className="max-w-[30ch] flex-initial rounded bg-white p-10">
            <h2 className="text-5xl font-bold">About Me</h2>
            <p className="text-base">
              Hi, I’m a computer science student from sheridan college who likes
              to merge creativity with technoogy. I design and develop
              applications for web and mobile.
            </p>
          </div>
        </div>
      </article>

      <article className="grid h-screen w-screen grow place-items-center">
        <h2 className="text-5xl">Projects</h2>
        <div className="flex flex-wrap content-center gap-4">
          <div className="aspect-square max-w-[30ch] flex-initial rounded bg-white p-10">
            <h2 className="text-5xl font-bold">About Me</h2>
            <p className="text-base">Hi</p>
          </div>
        </div>
      </article>

      {/* <article className="grid h-screen w-screen grow place-items-center">
        <div className="flex flex-wrap justify-center gap-2 p-10">
          <div className="v-[20vw] border-accent-200 h-[50vh] rounded border bg-base-100 bg-opacity-60 bg-clip-padding p-2 backdrop-blur-sm backdrop-filter">
            <h3 className="font-bold">Title</h3>
            <p>
              Hi, I’m a computer science student from sheridan college who likes
              to merge creativity with technoogy. I design and develop
              applications for web and mobile.
            </p>
          </div>
        </div>
      </article> */}
    </div>
  );
}

function ScrollBasedAnimation() {
  useFrame(({ mouse, camera }) => {
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      mouse.x * 0.5,
      0.03
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      mouse.y * 0.8,
      0.01
    );
    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      Math.max(4, Math.abs(mouse.x * mouse.y * 8)),
      0.01
    );
    camera.rotation.y = THREE.MathUtils.lerp(
      camera.rotation.y,
      mouse.x * -Math.PI * 0.025,
      0.001
    );
  });

  return (
    <ScrollControls pages={4}>
      <Scroll>
        <Particles />
        <Objects />
      </Scroll>
      {/* <Scroll>
        <Projects />
      </Scroll> */}
      <Scroll html>
        <Content />
      </Scroll>
    </ScrollControls>
  );
}

const ScrollExample = () => {
  return (
    <>
      <Canvas className="bg-base-100">
        <ambientLight />
        <directionalLight color="red" intensity={10} />
        <Suspense fallback={null}>
          <ScrollBasedAnimation />
        </Suspense>

        {/* <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
          <Noise opacity={0.2} />
        </EffectComposer> */}
        {/* <Perf position="top-left" /> */}
      </Canvas>
      <Loader />
    </>
  );
};

export default ScrollExample;
