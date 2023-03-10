import { type AppType } from "next/dist/shared/lib/utils";
import { MDXProvider } from "@mdx-js/react";
import "../styles/globals.css";
import { themeChange } from "theme-change";
import { useEffect } from "react";
import { Origin, Overlay } from "../components/Overlay";
import { Analytics } from "@vercel/analytics/react";
import mdxComponents from "../lib/mdxComponents";

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <>
      <MDXProvider components={mdxComponents}>
        <Overlay />
        <Origin />
        <Component {...pageProps} />
        <Analytics />
      </MDXProvider>
    </>
  );
};

export default MyApp;
