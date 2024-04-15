import { useSetAtom } from 'jotai';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyValuePair } from '@react-native-async-storage/async-storage/lib/typescript/types';
import * as SecureStore from 'expo-secure-store';

import { merge } from 'lodash';

import SettingsAtom from '../store/settingsAtom';
import { AtomKeyMap } from '../store/IAtom';
import AuthAtom from '../store/AuthAtom';
import { useMount } from '@lilib/hooks';
import { ReactNode, useCallback, useMemo, useState } from 'react';

const RootStorageProvider = ({ children }: { children: ReactNode }) => {
  const [ready, setReady] = useState(false);

  // Atoms
  const setSettings = useSetAtom(SettingsAtom.atom);
  const setAuth = useSetAtom(AuthAtom.atom);

  // storage keys and associating atoms
  const unsecuredStorage = useMemo(
    () => [
      {
        keys: SettingsAtom.keys as AtomKeyMap[],
        atom: setSettings,
      },
    ],
    [setSettings],
  );

  const securedStorage = useMemo(
    () => [
      {
        keys: AuthAtom.keys as AtomKeyMap[],
        atom: setAuth,
      },
    ],
    [setAuth],
  );

  const updateUnsecuredAtoms = useCallback(
    ([key, value]: KeyValuePair) => {
      try {
        const itemIndex = unsecuredStorage.findIndex((x) => x.keys.map((x) => x.key).includes(key));
        const item = unsecuredStorage[itemIndex];
        if (value) {
          item.atom((prev: Record<string, unknown>) => merge(prev, JSON.parse(value)));
        }
      } catch (err) {
        console.log('err', err);
      }
    },
    [unsecuredStorage],
  );

  const updateSecuredAtoms = useCallback(
    ([key, value]: KeyValuePair) => {
      try {
        const itemIndex = securedStorage.findIndex((x) => x.keys.map((x) => x.key).includes(key));
        const item = securedStorage[itemIndex];
        if (value) {
          item.atom((prev: Record<string, unknown>) => merge(prev, JSON.parse(value)));
        }
      } catch (err) {
        // swallow so it doesn't block others
        console.log('error', err);
      }
    },
    [securedStorage],
  );

  useMount(() => {
    (async () => {
      try {
        // async storage
        const unsecuredValues = await AsyncStorage.multiGet(unsecuredStorage.flatMap((x) => x.keys).map((x) => x.key));
        unsecuredValues.forEach(updateUnsecuredAtoms);

        // secure storage
        const flattened = securedStorage
          .flatMap((x) => x.keys)
          .map((x) =>
            (async () => {
              const value = await SecureStore.getItemAsync(x.key);
              return {
                value,
                key: x.key,
              };
            })(),
          );

        const securedValues = await Promise.all(flattened).then((res) =>
          res.map(({ key, value }) => [key, value] as KeyValuePair),
        );
        securedValues.forEach(updateSecuredAtoms);
      } catch (err) {
        console.log('error', err);
      } finally {
        setReady(true);
      }
    })();
  });

  if (!ready) return null;
  return children;
};

export default RootStorageProvider;
