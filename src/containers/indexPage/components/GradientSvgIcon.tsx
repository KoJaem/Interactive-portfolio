import React from 'react';
import { IconType } from 'react-icons/lib';
type Props = {
  Icon: IconType;
  color1: string;
  color2: string;
  size?: number;
  id: string;
  direction?: 'topToBottom' | 'leftToRight';
};
export const GradientSvg = ({ Icon, color1, color2, size, id, direction }: Props) => {
  if(direction === 'leftToRight') {
    return (
      <>
        <svg width="0" height="0">
          <linearGradient id={id} x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor={color1} offset="0%" />
            <stop stopColor={color2} offset="100%" />
          </linearGradient>
        </svg>
        <Icon size={size ? size : 40} style={{ fill: `url(#${id})` }} />
      </>
    );
  }
  
  return (
    <>
      <svg width="0" height="0">
        <linearGradient id={id} x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor={color1} offset="0%" />
          <stop stopColor={color2} offset="100%" />
        </linearGradient>
      </svg>
      <Icon size={size ? size : 40} style={{ fill: `url(#${id})` }} />
    </>
  );
};
