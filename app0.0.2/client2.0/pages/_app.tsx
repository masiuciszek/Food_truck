import React, { ReactElement } from "react"
import { AppProps } from "next/app"
import Layout from "../components/layout"
import AuthProvider from "../context/authState/AuthProvider"
import StoreProvider from "../context/storeState/StoreProvider"
import Head from "next/head"

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <AuthProvider>
      <StoreProvider>
        <Head>
          <title>Sick tastes</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StoreProvider>
    </AuthProvider>
  )
}
