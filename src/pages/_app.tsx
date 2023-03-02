import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";
import { themeChange } from "theme-change";
import { useEffect } from "react";
import { Origin, Overlay } from "../components/Overlay";
import { initGA, logPageView } from "../lib/analytics";

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  useEffect(() => {
    initGA();
  }, []);

  return (
    <>
      <Overlay />
      <Origin />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
