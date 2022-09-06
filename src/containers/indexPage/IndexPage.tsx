import React from 'react';
import { Typography } from 'src/components/Typography';
import styled from 'styled-components';
import { MoveImage } from './components';
import ClickImage from './components/ClickImage';

export const IndexPage = () => {
  return (
    <>
    <ClickImage src="/sample1.jpg" />
      {/* <MoveImage src="/sample1.jpg" /> */}
      {/* <MoveImage src="/sample2.jpg" /> */}
      {/* <MoveImage src="/sample3.jpg" /> */}
    </>
  );
};
