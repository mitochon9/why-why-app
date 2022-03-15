import { atom } from 'recoil';

export const valueState = atom<string>({
  key: 'valueState',
  default: '',
});
