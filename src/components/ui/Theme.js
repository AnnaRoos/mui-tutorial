import { createTheme } from '@mui/material/styles';

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';

export const theme = createTheme({
  palette: {
    common: {
      arcBlue: arcBlue,
      arcOrange: arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      fontSize: '1rem',
      fontWeight: 700,
      textTransform: 'none',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
  },
});
