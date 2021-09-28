import "../styles/global.css";
import React, { useState } from "react";
import Router from "next/router";
import ClipLoader from "react-spinners/ClipLoader";
import LoadingOverlay from "react-loading-overlay";
import utilStyles from "../styles/utils.module.css";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  //Binding events.
  Router.events.on("routeChangeStart", () => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
  });
  Router.events.on("routeChangeError", () => {
    setLoading(false);
  });

  return (
    <LoadingOverlay
      active={loading}
      spinner={<ClipLoader color="#00BFFF" size={150} speedMultiplier={0.5} />}
      styles={{
        overlay: (base) => ({
          ...base,
          height: "100vh",
        }),
      }}
    >
      <Component {...pageProps} />
    </LoadingOverlay>
  );
}
