import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import MenuBar from "../components/MenuBar";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";
import ScrollExample from "../components/ScrollExample";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kyuuari Project</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen w-screen bg-base-100">
        <MenuBar />
        <div className="h-screen w-screen ">
          <ScrollExample />
          {/* <Canvas className="border-red-500 bg-base-100"> */}
          {/* <ambientLight /> */}
          {/* <directionalLight color="red" intensity={10} /> */}
          {/* <Suspense fallback={null}> */}
          {/* <ScrollBasedAnimation /> */}
          {/* </Suspense> */}

          {/* <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
          <Noise opacity={0.2} />
        </EffectComposer> */}
          {/* <Perf position="top-left" /> */}
          {/* </Canvas> */}
          {/* <Loader /> */}
        </div>
        <div className="h-screen w-screen ">Hellow World 2</div>
      </main>
    </>
  );
};

export default Home;
