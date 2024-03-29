import { FC, ReactNode } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import theme from './ThemeProvider.ts';
import { store } from '../store';
import '../i18n/config.ts';

interface IAppProviders {
  children: ReactNode;
}

const AppProviders: FC<IAppProviders> = ({ children }) => {
  return (
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </Provider>
    </I18nextProvider>
  );
};

export default AppProviders;
