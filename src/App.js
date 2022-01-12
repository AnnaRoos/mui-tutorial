import { ThemeProvider } from '@mui/material/styles';

import Header from './components/ui/Header';
import { Typography } from '@mui/material';

import { theme } from './components/ui/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Typography>Hello!</Typography>
    </ThemeProvider>
  );
}

export default App;
