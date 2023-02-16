import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";
import { themeChange } from "theme-change";
import { useEffect } from "react";

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return <Component {...pageProps} />;
};

export default MyApp;
