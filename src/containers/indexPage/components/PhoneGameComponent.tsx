import styled from 'styled-components';
type Props = {
  containerWidth: number;
  containerHeight: number;
  iframeWidth: number;
  iframeHeight: number;
  src: string
};
export const PhoneGameComponent = ({
  containerWidth,
  containerHeight,
  iframeWidth,
  iframeHeight,
  src,
}: Props) => {
  return (
    <Container width={containerWidth} height={containerHeight}>
      <Iframe width={iframeWidth} height={iframeHeight} src={src} />
    </Container>
  );
};

type StyledProps = {
  width: number;
  height: number;
};
const Container = styled.section<StyledProps>`
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  /* width: 710px; */
  /* height: 400px; */
  background-image: url('iPhone.png');
  background-repeat: no-repeat;
  object-fit: contain;
  background-size: contain;
  background-position: center;
  display: none;
  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;

const Iframe = styled.iframe<StyledProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  border-radius: 24px;
`;
