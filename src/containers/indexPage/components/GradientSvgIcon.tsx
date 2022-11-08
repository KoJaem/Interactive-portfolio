import React from 'react';
import { IconType } from 'react-icons/lib';
type Props = {
  Icon: IconType;
  color1: string;
  color2: string;
};
export const GradientSvg = ({ Icon, color1, color2 }: Props) => {
  return (
    <>
      <svg width="0" height="0">
        <linearGradient id="myGradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor={color1} offset="0%" />
          <stop stopColor={color2} offset="100%" />
        </linearGradient>
      </svg>
      <Icon size={40} style={{ fill: 'url(#myGradient)' }} />
    </>
  );
};
