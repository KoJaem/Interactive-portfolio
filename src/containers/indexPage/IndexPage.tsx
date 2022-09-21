import { useRouter } from 'next/router';
import React from 'react';

export const IndexPage = () => {
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => {
          router.push(
            {
              pathname: '/projectGallery',
              query: {
                screenAnimation: true,
              },
            },
            '/projectGallery',
          );
        }}
      >
        갤러리로 가기
      </button>
    </>
  );
};
