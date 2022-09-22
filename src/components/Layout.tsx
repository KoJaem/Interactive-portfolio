import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};
export const Layout = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.section`
  height: 100vh;
`;
