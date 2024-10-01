import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { Seo } from 'src/components';
import { ProjectGalleryPage } from 'src/containers/projectGalleryPage/ProjectGalleryPage';
import { indexScreenAnimation } from 'src/recoil/atom';

export default function ProjectGallery() {
  const setIndexScreenAnimation = useSetRecoilState(indexScreenAnimation);
  useEffect(() => {
    setIndexScreenAnimation(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Seo title={'Gallery'} />
      <ProjectGalleryPage />
      {/* <LangchainChatWindow bubbleColor={'skyBlue'} boxHeaderColor='skyBlue' /> */}
    </>
  );
}
