import { atomWithReset } from 'jotai/utils';

import { IAtom } from './IAtom';

export type User = {
  name: string;
  isActive: boolean;
};

const init: User = {
  name: '',
  isActive: false,
};

const authAtom = atomWithReset(init);

const AuthAtom: IAtom<User> = {
  atom: authAtom,
  init: { ...init },
  keys: [
    {
      key: 'profile',
      props: ['name', 'isActive'],
    },
  ],
  storage: 'secure',
};

export default AuthAtom;
