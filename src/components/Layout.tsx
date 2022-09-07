import React, { ReactElement } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactElement;
};
export const Layout = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.section`
  height: 100vh;
`;
