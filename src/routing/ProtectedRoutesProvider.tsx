import { useUpdate } from '@lilib/hooks';
import { useRouter, useSegments } from 'expo-router';
import { ReactNode, useCallback } from 'react';
import Constants from './Constants';
import { useNavigation } from 'expo-router';

const ProtectedRoutesProvider = ({ children }: { children: ReactNode | ReactNode[] }) => {
  const navigation = useNavigation();
  const router = useRouter();
  const segments = useSegments();

  const authenticated = false;

  // this prevents mounting multiple tab components
  const handleWipeHistory = useCallback(
    (route: string) => {
      if (router.canGoBack()) {
        navigation.dispatch({ type: 'POP_TO_TOP' });
      }
      router.replace(route);
    },
    [navigation, router],
  );
  useUpdate(() => {
    const authGroup = segments[0] === '(auth)';

    if (!authenticated && !authGroup) {
      handleWipeHistory(Constants.auth.login);
    } else if (authenticated && authGroup) {
      handleWipeHistory(Constants.root);
    }
  }, [authenticated, router, segments]);

  return children;
};

export default ProtectedRoutesProvider;
