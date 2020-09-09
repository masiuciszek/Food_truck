import Page from "components/Page";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import configureStore from "src/store";

const store = configureStore();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </Provider>
  );
}
