import { useUpdate } from '@lilib/hooks';
import { useRouter, useSegments } from 'expo-router';
import { ReactNode } from 'react';

const ProtectedRoutesProvider = ({ children }: { children: ReactNode | ReactNode[] }) => {
  const router = useRouter();
  const segments = useSegments();

  const authenticated = false;

  useUpdate(() => {
    const authGroup = segments[0] === '(auth)';

    if (!authenticated && !authGroup) {
      router.replace('/login');
    } else if (authenticated && authGroup) {
      router.replace('/');
    }
  }, [authenticated, router, segments]);

  return children;
};

export default ProtectedRoutesProvider;
