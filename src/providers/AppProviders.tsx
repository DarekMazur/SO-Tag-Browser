import { FC, ReactNode } from 'react';
import { ThemeProvider, Typography } from '@mui/material';
import theme from './ThemeProvider.ts';

interface IAppProviders {
  children: ReactNode;
}

const AppProviders: FC<IAppProviders> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography component="div">{children}</Typography>
    </ThemeProvider>
  );
};

export default AppProviders;
