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
        <link rel="shortcut icon" href="/titleImage.png" type="image/x-icon" />
        <meta name="viewport" content="viewport-fit=cover" /> {/* 모바일에서 웹처럼 보이게 하는 meta code */}
        <meta property="og:title" content="FrontEnd 개발자 KoJaem" />
        <meta property="og:description" content="KoJaem Portfolio" />
        <meta property="og:image" content="/thumbnail.jpg" />
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
