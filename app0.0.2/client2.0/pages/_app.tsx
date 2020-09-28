import React, { ReactElement } from "react";
import { AppProps } from "next/app";
import Layout from "../components/layout";
import AuthProvider from "../context/authState/AuthProvider";
import StoreProvider from "../context/storeState/StoreProvider";

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <AuthProvider>
      <Layout>
        <StoreProvider>
          <Component {...pageProps} />
        </StoreProvider>
      </Layout>
    </AuthProvider>
  );
}
