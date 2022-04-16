import React from "react";
import type { AppProps } from "next/app";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import "./../styles/globals.css";

const getLibrary = (provider) => {
  return new Web3(provider);
};

interface PageProps {}
const MyApp: React.FC<PageProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary} >
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
};

export default MyApp;
