import React, { ReactElement } from "react";
import { AppProps } from "next/app";
import Layout from "../components/layout";
import AuthProvider from "../context/authState/AuthProvider";

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}
