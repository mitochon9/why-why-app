import { atom } from 'recoil';

export const buttonNameState = atom<'primary' | 'secondary'>({
  key: 'buttonNameState',
  default: 'primary',
});
