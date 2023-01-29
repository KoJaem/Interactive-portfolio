import { CSSProperties } from 'react';
import { customColorType, customColor } from "src/constants/customColor";
import styled, { css } from "styled-components";

export type TypographyProps = React.PropsWithChildren<{
  size: string;
  // | "80"
  // | "60"
  // | "48"
  // | "44"
  // | "40"
  // | "36"
  // | "32"
  // | "28"
  // | "24"
  // | "20"
  // | "16"
  // | "12"
  // | "8"
  // | "4";
  color?: keyof customColorType;
  textAlign?: 'left' | 'center' | 'right';
  fontWeight?: string;
  lineHeight?: number;
  fontHidden?: boolean;
  fontShadow?: string;
  opacity?: number;
  notBreak?: boolean;
  style?: CSSProperties;
  listPoint?: boolean;
}>;
export const Typography = (props: TypographyProps) => {
  return <TypographyText style={props.style} {...props}>{props.children}</TypographyText>;
};

export const handleColor = (color: keyof customColorType) => {
  for (const keyStore of Object.keys(customColor)) {
    if (keyStore === color) return customColor[keyStore];
  }
};

const TypographyText = styled.p<TypographyProps>`
  font-size: ${({ size }) => (isNaN(Number(size)) ? size : size + 'px')};
  color: ${({ color }) => (color ? handleColor(color) : customColor.black)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : '')};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : 1)};
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
  ${({ notBreak }) => (notBreak ? `white-space:nowrap;` : '')};
  word-break: keep-all;

  ${({ fontHidden }) =>
    fontHidden ? 'overflow: hidden;text-overflow: ellipsis;' : ''}
  ${({ fontShadow }) => (fontShadow ? `text-shadow: ${fontShadow}` : '')}

  ${({ listPoint }) => listPoint ? css`
  ::before {
    content: '- ';
  }
  ` : ''};

`;
