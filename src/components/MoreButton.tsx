import React, { ReactNode } from 'react';
import { customColor } from 'src/constants';
import { customColorType } from 'src/constants/customColor';
import styled, { CSSProperties } from 'styled-components';
import { handleColor } from './Typography';
type Props = {
  children: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
  backgroundColor?: keyof customColorType;
};
export const MoreButton = ({
  children,
  onClick,
  style,
  backgroundColor,
}: Props) => {
  return (
    <Wrapper backgroundColor={backgroundColor} style={style} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.button<{ backgroundColor?: keyof customColorType }>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? handleColor(backgroundColor) : customColor.purple};
  border-radius: 24px;
  width: 160px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
