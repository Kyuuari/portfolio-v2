import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";
import { themeChange } from "theme-change";
import { useEffect } from "react";
import { Origin, Overlay } from "../components/Overlay";
import { Analytics } from "@vercel/analytics/react";

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <>
      <Overlay />
      <Origin />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default MyApp;
