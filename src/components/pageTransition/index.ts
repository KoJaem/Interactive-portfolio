import dynamic from 'next/dynamic';

export const Screen = dynamic(() => import('./Screen').then(mod => mod.Screen));
export const ScreenAndSlide = dynamic(() => import('./ScreenAndSlide').then(mod => mod.ScreenAndSlide));
export const ScreenTransition = dynamic(() => import('./ScreenTransition').then(mod => mod.ScreenTransition));
export const SlideAndScreen = dynamic(() => import('./SlideAndScreen').then(mod => mod.SlideAndScreen));
export const SlideTransition = dynamic(() => import('./SlideTransition').then(mod => mod.SlideTransition));
export const TransitionSelect = dynamic(() => import('./TransitionSelect').then(mod => mod.TransitionSelect));