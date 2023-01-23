import React from 'react';
import { ScreenAndSlide, SlideAndScreen } from './index';
type Props = {
  asPath: string;
  children: React.ReactNode;
};
export const TransitionSelect = ({ asPath, children }: Props) => {
  if (asPath === '/') return <ScreenAndSlide>{children}</ScreenAndSlide>;
  if (asPath === '/projectGallery') return <SlideAndScreen>{children}</SlideAndScreen>;
  return <>{children}</>;
};
