import { type AppType } from "next/dist/shared/lib/utils";
import { MDXProvider } from "@mdx-js/react";
import "../styles/globals.css";
import { themeChange } from "theme-change";
import { useEffect, useRef } from "react";
import { Overlay } from "../components/Overlay";
import { Analytics } from "@vercel/analytics/react";
import mdxComponents from "../lib/mdxComponents";
import { AnimatePresence } from "framer-motion";
// import { motion } from "framer-motion";
import { useFollowPointer } from "../lib/use-follow-pointer";

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  // const ref = useRef(null);
  // const { x, y } = useFollowPointer(ref);

  return (
    <>
      {/* <motion.div
        ref={ref}
        className="box bg-black"
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 3,
          stiffness: 50,
          restDelta: 0.001,
        }}
      /> */}
      <MDXProvider components={mdxComponents}>
        <Overlay />
        <AnimatePresence mode="popLayout" initial={false}>
          <Component {...pageProps} />
        </AnimatePresence>
        <Analytics />
      </MDXProvider>
    </>
  );
};

export default MyApp;
