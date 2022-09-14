import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { Layout } from 'src/components';
import { AnimatePresence } from 'framer-motion';
import { Transition } from 'src/components/Transition';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Transition>
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </Transition>
    </>
  );
}

export default MyApp;
