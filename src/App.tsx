import { Container, ThemeProvider, Typography } from '@mui/material';
import theme from './providers/ThemeProvider.ts';
import Header from './components/Organisms/Header/Header.tsx';
import Footer from './components/Organisms/Footer/Footer.tsx';
import TableWrapper from './components/Organisms/TableWrapper/TableWrapper.tsx';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography component="div">
        <Header />
        <Container component="main">
          <TableWrapper />
        </Container>
        <Footer />
      </Typography>
    </ThemeProvider>
  );
};

export default App;
