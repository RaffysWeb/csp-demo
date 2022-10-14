import NextApp from "next/app";

function MyApp({ Component, pageProps }) {
  const nonce = __webpack_nonce__;
  console.log("MyApp", nonce);
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext) => {
  const nonce = __webpack_nonce__;
  console.log("MyApp.getInitialProps", nonce);

  const appProps = await NextApp.getInitialProps(appContext);

  return {
    ...appProps,
  };
};

export default MyApp;
