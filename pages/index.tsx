import type { NextPage } from 'next';
import { Seo } from 'src/components';
import { LangchainChatWindow } from 'src/components/LangchainChatWindow';
import { IndexPage } from 'src/containers';

const Home: NextPage = () => {
  return (
    <>
      <Seo title={'Main'} />
      <IndexPage />
      <LangchainChatWindow bubbleColor={'lightYellow'} boxHeaderColor='purple'/>
    </>
  );
};

export default Home;
