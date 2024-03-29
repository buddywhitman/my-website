import createEmotionServer from "@emotion/server/create-instance";
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import * as React from "react";

import createEmotionCache from "styles/createEmotionCache";

const APP_NAME = "buddywhitman";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;
    const cache = createEmotionCache();

    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
      originalRenderPage({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        enhanceApp: (App: any) => (props) => (
          <App emotionCache={cache} {...props} />
        ),
      });

    const initialProps = await Document.getInitialProps(ctx);

    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(" ")}`}
        key={style.key}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        ...emotionStyleTags,
      ],
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content={APP_NAME} />
          <meta name="robots" content="all" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="description"
            content="Web Developer. Web Designer. India. UX. Frontend Developer. Full Stack Developer."
          />
          <meta name="theme-color" content="#FFFFFF" />
          <meta
            name="google-site-verification"
            content="0_OaGchPmWPm4Es55g9khnm9XPgy0nWp2jO2xoAkZGQ"
          />
          <meta name="rating" content="adult" />
          <link
            rel="icon"
            type="image/png"
            sizes="196x196"
            href="/favicon-196.png"
          />
          <link rel="apple-touch-icon" href="/apple-icon-180.png" />
          <meta name="/apple-mobile-web-app-capable" content="yes" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
