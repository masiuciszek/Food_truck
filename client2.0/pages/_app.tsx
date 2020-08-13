import React, { ReactElement } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import Layout from "../components/layout";

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Layout>
      <Head>
        <title>Food truck</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
