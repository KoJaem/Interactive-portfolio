import React, { ReactNode } from 'react';
import { customColor } from 'src/constants';
import styled, { CSSProperties } from 'styled-components';
type Props = {
  children: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
};
export const MoreButton = ({ children, onClick, style }: Props) => {
  return (
      <Wrapper style={style} onClick={onClick}>{children}</Wrapper>
  );
};

const Wrapper = styled.button`
  background-color: ${customColor.purple};
  border-radius: 24px;
  width: 160px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
