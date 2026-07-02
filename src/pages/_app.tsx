 
import { ChakraProvider } from "@chakra-ui/react";
import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import "@fontsource/raleway/latin.css";
import "@fontsource/montserrat/latin.css";
import "@fontsource/playfair-display/latin.css";

import defaultSEOConfig from "../../next-seo.config";
import Layout from "components/layout";
import createEmotionCache from "styles/createEmotionCache";
import customTheme from "styles/customTheme";
import { ColorModeProvider } from "components/ui/color-mode";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import "styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => {
  const router = useRouter();
  const isResume = router.pathname === "/resume";

  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider value={customTheme}>
        <ColorModeProvider>
          <Head>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
            />
          </Head>
          <DefaultSeo {...defaultSEOConfig} />
          {!isResume && <Box className="aurora-bg" aria-hidden />}
          <Box className={!isResume ? "dynamic-theme-wrapper" : ""} position="relative" zIndex="1">
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Box>
        </ColorModeProvider>
      </ChakraProvider>
    </CacheProvider>
  );
};

export default MyApp;
