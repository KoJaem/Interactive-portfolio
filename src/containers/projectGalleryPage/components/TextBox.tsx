import React, { ReactNode } from 'react'
import styled from 'styled-components'
type Props = {
  color: string;
  paddingLR: number;
  paddingBT: number;
  children: ReactNode;
}
export const TextBox = ({color, paddingLR, paddingBT, children}: Props) => {
  return (
    <Container color={color} paddingLR={paddingLR} paddingBT={paddingBT}>{children}</Container>
  )
}
type StyledProps = {
  color: string;
  paddingLR: number;
  paddingBT: number;
};
const Container = styled.section<StyledProps>`
  background-color: ${({ color }) => color};
  padding: ${({ paddingBT, paddingLR }) => `${paddingBT}px ${paddingLR}px`};
  border-radius: 24px;
  width: 100%;
  max-width: 900px;
  white-space: pre-wrap;
`;