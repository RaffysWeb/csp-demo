/* eslint-disable immutable/no-this */
import React from "react";
import generateCSP from "../utils/generate-csp";
import Document, { Html, Head, Main, NextScript } from "next/document";

class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const nonce = __webpack_nonce__;
    const additionalProps = { nonce };
    console.log("AppDocument", nonce);

    ctx.res.setHeader(
      "Content-Security-Policy-Report-Only",
      generateCSP({ nonce })
    );
    return { ...initialProps, ...additionalProps };
  }

  render() {
    const { nonce } = this.props;

    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
