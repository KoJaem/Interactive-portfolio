import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { Layout } from 'src/components';
import { useRouter } from 'next/router';
import { ScreenTransition } from 'src/components/pageTransition';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const { route } = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <RecoilRoot>
        <Layout>
          {route === '/' || route.includes('projectGallery') ? (
            <ScreenTransition>
              <Component {...pageProps} />
            </ScreenTransition>
          ) : (
            <Component {...pageProps} />
          )}
        </Layout>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
