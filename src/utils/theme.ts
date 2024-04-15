import { extendTheme } from 'native-base';

const theme = extendTheme({
  colors: {
    primary: {},
    secondary: {},
  },
  fontConfig: {
    Montserrat: {
      100: {
        normal: 'Montserrat_100Thin',
        italic: 'Montserrat_100Thin_Italic',
      },
      200: {
        normal: 'Montserrat_200ExtraLight',
        italic: 'Montserrat_200ExtraLight_Italic',
      },
      300: {
        normal: 'Montserrat_300Light',
        italic: 'Montserrat_300Light_Italic',
      },
      700: {
        normal: 'Montserrat_700Bold',
        italic: 'Montserrat_700Bold_Italic',
      },
    },
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
    mono: 'Montserrat',
  },
});

export default theme;
