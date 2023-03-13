import { type AppType } from "next/dist/shared/lib/utils";
import { MDXProvider } from "@mdx-js/react";
import "../styles/globals.css";
import { themeChange } from "theme-change";
import { useEffect } from "react";
import { Overlay } from "../components/Overlay";
import { Analytics } from "@vercel/analytics/react";
import mdxComponents from "../lib/mdxComponents";
import { AnimatePresence } from "framer-motion";
// import { motion } from "framer-motion";
// import { useFollowPointer } from "../lib/use-follow-pointer";

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <>
      <MDXProvider components={mdxComponents}>
        <Overlay />
        <AnimatePresence mode="sync" initial={false}>
          <Component {...pageProps} />
        </AnimatePresence>
        <Analytics />
      </MDXProvider>
    </>
  );
};

export default MyApp;
