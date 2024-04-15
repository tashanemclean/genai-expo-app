import { atomWithReset } from 'jotai/utils';

import { IAtom } from './IAtom';

export type ApiEnvironment = {
  name: string;
  tag: string;
  url: string;
};

type SelectedApiEnvironment = {
  environment: ApiEnvironment | null;
};

const init: SelectedApiEnvironment = {
  environment: null,
};

const atom = atomWithReset(init);

const SettingsAtom: IAtom<SelectedApiEnvironment> = {
  atom,
  init: { ...init },
  keys: [{ key: 'settings' }],
  storage: 'plainText',
};

export default SettingsAtom;
