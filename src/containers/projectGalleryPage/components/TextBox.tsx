import { motion } from 'framer-motion';
import React, { ReactNode, useState } from 'react';
import { Typography } from 'src/components';
import styled from 'styled-components';
import { customColor } from "src/constants";
type Props = {
  color: string;
  paddingLR: number;
  paddingBT: number;
  gapBT?: number;
  description: string;
  children: ReactNode;
};
export const TextBox = ({
  color,
  paddingLR,
  paddingBT,
  gapBT,
  description,
  children,
}: Props) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <Container
      color={color}
      paddingLR={paddingLR}
      paddingBT={paddingBT}
      gapBT={gapBT}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
        {children}
      {hover && (
        <Description animate={{ opacity: [0, 0.8] }} transition={{duration:0.2}}>
          <Typography size="20" fontWeight="bold" color='white'>
            {description}
          </Typography>
        </Description>
      )}
    </Container>
  );
};
type StyledProps = {
  color: string;
  paddingLR: number;
  paddingBT: number;
  gapBT?: number;
};
const Container = styled(motion.section)<StyledProps>`
  position: relative;
  background-color: ${({ color }) => color};
  padding: ${({ paddingBT, paddingLR }) => `${paddingBT}px ${paddingLR}px`};
  border-radius: 24px;
  width: 100%;
  max-width: 900px;
  white-space: pre-wrap;
  display: flex;
  gap: ${({ gapBT }) => gapBT && `${gapBT}px 0`};
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

const Description = styled(motion.section)`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${customColor.black};
`;
