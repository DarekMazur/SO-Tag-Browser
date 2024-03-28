import { FC, ReactNode } from 'react';
import { ThemeProvider, Typography } from '@mui/material';
import { Provider } from 'react-redux';
import theme from './ThemeProvider.ts';
import { store } from '../store';

interface IAppProviders {
  children: ReactNode;
}

const AppProviders: FC<IAppProviders> = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Typography component="div">{children}</Typography>
      </ThemeProvider>
    </Provider>
  );
};

export default AppProviders;
