import React, { CSSProperties, useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components';
// Math.floor(Math.random() * 500)
type Props = {
  src: string;
}
export const MoveImage = ({ src }: Props) => {
  const [height, setHeight] = useState<number>();
  // const [speed, setSpeed] = useState<number>();

  useEffect(() => {
    // Math.random() 범위지정 : (Math.random() * (최대 - 최소)) + 최소
    const ran = Math.floor((Math.random() * 70) + 15);
    setHeight(ran);
  }, [])

  if (height) {
    return (
      <Container positionNum={height}>
        <Image alt="" src={src} />
      </Container>
    );
  }
  return <></>;

};
type StyledProps = {
  positionNum : number;
}
const Container = styled.section<StyledProps>`
  position: absolute;
  display: flex;
  align-items: center;
  top: ${({ positionNum }) => `${positionNum}vh`};
  left: 50%; // 임시
  justify-content: center;
  transform: translate(-50%, -50%);
`;

const Image = styled.img`

`;