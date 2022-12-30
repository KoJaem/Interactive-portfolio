import React from 'react';
import { ScreenTransition } from './ScreenTransition';
import { SlideAndScreen } from './SlideAndScreen';
import { SlideTransition } from './SlideTransition';
type Props = {
  asPath: string;
  children: React.ReactNode;
};
export const TransitionSelect = ({ asPath, children }: Props) => {
  console.log(asPath);
  if(asPath === '/') return <SlideTransition>{children}</SlideTransition>
  if(asPath === '/projectGallery') return <SlideAndScreen>{children}</SlideAndScreen>;
  if(asPath.includes('projectGallery')) return <ScreenTransition>{children}</ScreenTransition>;
  return <>{children}</>;
};
