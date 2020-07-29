import { AppProps } from "next/app";
import Layout from "../components/layout";
import SiteProvider from "../context/site.context/Site.context";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SiteProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SiteProvider>
  );
}
