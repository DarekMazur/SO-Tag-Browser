import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontSize: 16,
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
        },
      },
    },
  },
});

export default theme;
