import { customColorType, customColor } from 'src/constants/customColor';
import styled from 'styled-components';

export type GradientTypographyProps = React.PropsWithChildren<{
  size: string;
  // | '80'
  // | '60'
  // | '48'
  // | '44'
  // | '40'
  // | '36'
  // | '32'
  // | '28'
  // | '24'
  // | '20'
  // | '16'
  // | '12'
  // | '8'
  // | '4';
  color1?: keyof customColorType;
  color2?: keyof customColorType;
  textAlign?: 'left' | 'center' | 'right';
  fontWeight?: string;
  lineHeight?: number;
  fontHidden?: boolean;
  fontShadow?: string;
  breakAll?: boolean;
}>;
export const GradientTypography = (props: GradientTypographyProps) => {
  return <TypographyText {...props}>{props.children}</TypographyText>;
};

export const handleColor = (color: keyof customColorType) => {
  for (const keyStore of Object.keys(customColor)) {
    if (keyStore === color) return customColor[keyStore];
  }
};

const TypographyText = styled.p<GradientTypographyProps>`
  background-image: ${({ color1, color2 }) => (color1 && color2 ? `linear-gradient(120deg, ${handleColor(color1)} 30%, ${handleColor(color2)} 100%)` : customColor.black)};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: ${({ size }) => isNaN(Number(size)) ? size : size + "px"};
  text-align: ${({ textAlign }) => textAlign ? textAlign : ''};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) => lineHeight ? lineHeight : 1};
  word-break: ${({ breakAll }) => (breakAll ? 'break-all' : 'keep-all')};

  ${({ fontHidden }) =>
    fontHidden ? 'overflow: hidden;text-overflow: ellipsis;' : ''}
    
  ${({fontShadow}) => 
    fontShadow ? `text-shadow: ${fontShadow}` : ""}

`;

