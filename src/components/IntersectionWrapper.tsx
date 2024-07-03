import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { observe } from 'src/utils/observe';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
  minHeight?: string;
};
export const IntersectionWrapper = ({ minHeight, children }: Props) => {
  const observerTarget = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    observe({ setShow, observerTarget });
  }, []);

  return (
    <Container ref={observerTarget} minHeight={minHeight} show={show}>
      {show && children}
    </Container>
  );
};

type StyledProps = {
  minHeight?: string;
  show?: boolean;
};
const Container = styled.section<StyledProps>`
  width: 100%;
  min-height: ${({ show, minHeight }) => show ? '' : minHeight ? isNaN(Number(minHeight)) ? minHeight : `${minHeight}px` : '100px'};
`;
