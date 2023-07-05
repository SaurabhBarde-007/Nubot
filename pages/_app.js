import "@/styles/globals.css";
import { useEffect, useState } from "react";
import LoadingScreen from "./loader";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
      clearTimeout(delay);
    }, 6000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      {/* {loading ? (
        <LoadingScreen />
      ) : (
        <> */}
      <Navbar />
      <Component {...pageProps} />
      {/* </>
      )} */}
    </>
  );
}
