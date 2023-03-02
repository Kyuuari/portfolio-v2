import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";
import { themeChange } from "theme-change";
import { useEffect } from "react";
import { Origin, Overlay } from "../components/Overlay";
import Script from "next/script";

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-T42DL494ED"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-T42DL494ED');
        `}
      </Script>
      <Overlay />
      <Origin />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
