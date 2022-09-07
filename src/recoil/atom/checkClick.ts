import { atom } from 'recoil';

export const checkClick = atom<boolean>({
  key: 'checkCLick',
  default: false,
})
