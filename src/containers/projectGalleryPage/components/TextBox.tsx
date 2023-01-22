import { motion } from 'framer-motion';
import React, { ReactNode, useState } from 'react';
import { Typography } from 'src/components';
import styled from 'styled-components';
import { customColor } from 'src/constants';
import { handleColor } from 'src/components/Typography';
import { customColorType } from 'src/constants/customColor';
type Props = {
  color: keyof customColorType;
  paddingLR: number;
  paddingBT: number;
  gap?: number;
  description: string;
  maxHeight?: number;
  children: ReactNode;
};
export const TextBox = ({
  color,
  paddingLR,
  paddingBT,
  gap,
  description,
  children,
}: Props) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <Container
      color={color}
      padding_lr={paddingLR}
      padding_bt={paddingBT}
      gap={gap}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      {children}
      {hover && (
        <Description
          animate={{ opacity: [0, 0.8] }}
          transition={{ duration: 0.2 }}
        >
          <Typography size="1rem" fontWeight="bold" color="white">
            {description}
          </Typography>
        </Description>
      )}
    </Container>
  );
};
type StyledProps = {
  color: keyof customColorType;
  padding_lr: number;
  padding_bt: number;
  maxHeight?: number;
  gap?: number;
};
const Container = styled(motion.section)<StyledProps>`
  position: relative;
  background-color: ${({ color }) => `${handleColor(color)}50`};
  padding: ${({ padding_bt, padding_lr }) => `${padding_bt}px ${padding_lr}px`};
  border-radius: 24px;
  width: 100%;
  white-space: pre-wrap;
  display: flex;
  justify-content: center;
  gap: ${({ gap }) => gap && `${gap}px`};
  flex-direction: column;
  overflow: hidden;
  cursor: default;
  max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}px` : '')};
  overflow-y: auto;
  box-shadow: 4px 4px 5px ${customColor.skyBlue};
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
