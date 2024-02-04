import dynamic from 'next/dynamic';
export const Header = dynamic(() => import('./Header').then(mod => mod.Header));
export const Intro = dynamic(() => import('./Intro').then(mod => mod.Intro));
export const MyInfo = dynamic(() => import('./MyInfo').then(mod => mod.MyInfo));
export const Projects = dynamic(() => import('./Projects').then(mod => mod.Projects));
export const ThreeDProjectSwiper = dynamic(() => import('./ThreeDProjectSwiper').then(mod => mod.ThreeDProjectSwiper));
export const MySkills = dynamic(() => import('./MySkills').then(mod => mod.MySkills));
