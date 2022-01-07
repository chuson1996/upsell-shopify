import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import { Provider } from '@shopify/app-bridge-react';
import Cookies from 'js-cookie';
import ClientRouter from '../components/ClientRouter';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import '@shopify/polaris/dist/styles.css';

const client = new ApolloClient({
  fetchOptions: {
    credentials: 'include'
  },
});

class MyApp extends App {
  render() {
    const config = {
      apiKey: API_KEY,
      shopOrigin: Cookies.get("shopOrigin"),
      forceRedirect: true
    };
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>Upsell App</title>
          <meta charSet="utf-8" />
        </Head>
        <Provider config={config}>
          <ClientRouter />
          <AppProvider>
            <ApolloProvider client={client}>
              <Component {...pageProps} />
            </ApolloProvider>
          </AppProvider>
        </Provider>
      </React.Fragment>
    );
  }
}

export default MyApp;