import { AbrilFatface_400Regular } from '@expo-google-fonts/abril-fatface';
import {
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
} from '@expo-google-fonts/montserrat';
import * as Font from 'expo-font';
import { NativeBaseProvider } from 'native-base';

import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';


import { useState } from 'react';
import { useMount, useUpdate } from '@lilib/hooks';
import RootStorageProvider from '../src/routing/RootStorageProvider';
import theme from '../src/utils/theme';
import ProtectedRoutesProvider from '../src/routing/ProtectedRoutesProvider';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);

  useMount(() => {
    (async () => {
      try {
        // Load Fonts
        // Abril
        await Font.loadAsync({ AbrilFatface_400Regular });
        // Montserrat
        await Font.loadAsync({
          Montserrat_100Thin,
          Montserrat_100ThinItalic: Montserrat_100Thin_Italic,
          Montserrat_200ExtraLight,
          Montserrat_200ExtraLightItalic: Montserrat_200ExtraLight_Italic,
          Montserrat_300Light,
          Montserrat_300LightItalic: Montserrat_300Light_Italic,
          Montserrat_700Bold,
          Montserrat_700Bold_Italic,
        });
      } finally {
        setIsReady(true);
      }
    })();
  });

  useUpdate(() => {
    (async () => {
      if (!isReady) return;
      await SplashScreen.hideAsync();
    })();
  }, [isReady]);

  if (!isReady) return null;
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <RootStorageProvider>
      <NativeBaseProvider theme={theme}>
        <ProtectedRoutesProvider>
          <Stack>
            <Stack.Screen
              name="(auth)"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(tabs)"
              options={{ headerShown: false }}
            />
          </Stack>
        </ProtectedRoutesProvider>
      </NativeBaseProvider>
    </RootStorageProvider>
  );
}
