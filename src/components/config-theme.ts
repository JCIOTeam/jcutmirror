import { PaletteMode, ThemeOptions, createTheme } from '@mui/material';
import '@fontsource/poppins';

function configTheme(mode: PaletteMode): ThemeOptions {
  return {
    palette:
      mode === 'light'
        ? {
            primary: {
              main: '#59c1dc',
              light: '#79d4d8',
              dark: '#328dad',
            },
            neutral: {
              main: '#f2f7f9',
            },
            success: {
              main: '#59c1dc',
            },
            warning: {
              main: '#f8903b',
            },
            info: {
              main: '#6780da',
              light: '#63a0cf',
            },
            error: {
              main: '#e44919',
            },
            background: {
              default: '#f0f3f8',
            },
          }
        : {
            primary: {
              main: '#79d4d8',
              light: '#abece4',
              dark: '#328dad',
            },
            neutral: {
              main: '#121212',
            },
            success: {
              main: '#79d4d8',
            },
            warning: {
              main: '#f8903b',
            },
            info: {
              main: '#6780da',
              light: '#63a0cf',
            },
            error: {
              main: '#e44918',
            },
            background: {
              default: '#121212',
              paper: '#161718',
            },
          },
    typography: {
      h1: {
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
      },
      h2: {
        fontFamily: '"Metropolis", sans-serif',
        fontWeight: 700,
      },
      h3: {
        fontFamily: '"Metropolis", sans-serif',
        fontWeight: 700,
      },
      h5: {
        fontFamily: '"Metropolis", sans-serif',
        fontWeight: 700,
      },
      h6: {
        fontFamily: '"Metropolis", sans-serif',
        fontWeight: 700,
      },
      subtitle1: {
        fontFamily: '"Metropolis", sans-serif',
        fontWeight: 700,
      },
      subtitle2: {
        fontFamily: '"Metropolis", sans-serif',
        fontWeight: 700,
      },
    },
  };
}

export const lightTheme = createTheme(
  {
    palette: {
      mode: 'light',
    },
  },
  configTheme('light')
);

export const darkTheme = createTheme(
  {
    palette: {
      mode: 'dark',
    },
  },
  configTheme('dark')
);

/* the code below decares customized color */

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

// Update the Button"s color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}
