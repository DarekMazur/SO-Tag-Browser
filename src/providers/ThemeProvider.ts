import { createTheme } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

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
          backgroundColor: blueGrey[50],
        },
      },
    },
  },
});

export default theme;
