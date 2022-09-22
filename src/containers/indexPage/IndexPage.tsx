import { useRouter } from 'next/router';
import React from 'react';

export const IndexPage = () => {
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => {
          router.push('/projectGallery');
        }}
      >
        갤러리로 가기
      </button>
    </>
  );
};
