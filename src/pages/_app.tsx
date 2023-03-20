import '@styles/modern-normalize.min.css';
import '@styles/globals.scss';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { Provider as StyletronProvider } from 'styletron-react';
import { styletron } from '../../styletron';
import MainBackground from '@components/UI/MainBackground/MainBackground';
import Layout from '@components/UI/Layout/Layout';
import { BaseProvider, LightTheme } from 'baseui';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mozio Distance Calculator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>{`
        body {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <StyletronProvider value={styletron}>
        <BaseProvider
          theme={LightTheme}
          overrides={{ AppContainer: { style: { height: '100%' } } }}
          zIndex={2}
        >
          <MainBackground />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </BaseProvider>
      </StyletronProvider>
    </>
  );
}
