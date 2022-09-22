import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { Layout } from 'src/components';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { ScreenTransition } from 'src/components/pageTransition';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log(router.route.includes('projectGallery'));
  return (
    <RecoilRoot>
      <Layout>
        {router.route.includes('projectGallery') ? (
          <ScreenTransition>
            <Component {...pageProps} />
          </ScreenTransition>
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
