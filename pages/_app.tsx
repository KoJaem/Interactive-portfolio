import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { Layout } from 'src/components';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { TransitionSelect } from 'src/components/pageTransition/TransitionSelect';
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <RecoilRoot>
        <Layout>
          <AnimatePresence mode="wait">
            <motion.section key={asPath}>
              <TransitionSelect asPath={asPath}>
                <Component {...pageProps} />
              </TransitionSelect>
            </motion.section>
          </AnimatePresence>
        </Layout>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
