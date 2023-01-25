import type { NextPage } from 'next';
import { Seo } from 'src/components';
import { IndexPage } from 'src/containers';

const Home: NextPage = () => {
  return (
    <>
      <Seo title={'Main'} />
      <IndexPage />
    </>
  );
};

export default Home;
