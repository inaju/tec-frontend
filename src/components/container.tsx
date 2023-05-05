import { AppProps } from "next/app";
import React from "react";

type Props = {};

const Container = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
};

export default Container;
