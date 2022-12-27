import React, { ReactNode } from 'react';
import { customColor } from 'src/constants';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};
export const Layout = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.section`
  height: 100vh;
  /* background-color: ${customColor.black}; */
`;
