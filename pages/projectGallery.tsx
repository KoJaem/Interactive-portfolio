import React from 'react';
import { Seo } from 'src/components';
import { ProjectGalleryPage } from 'src/containers/projectGalleryPage/ProjectGalleryPage';

export default function ProjectGallery() {
  return (
    <>
      <Seo title={'Gallery'}/>
      <ProjectGalleryPage />
    </>
  );
}
