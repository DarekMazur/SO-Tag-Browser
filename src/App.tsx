import { Container } from '@mui/material';
import Header from './components/Organisms/Header/Header.tsx';
import Footer from './components/Organisms/Footer/Footer.tsx';
import TableWrapper from './components/Organisms/TableWrapper/TableWrapper.tsx';
import AppProviders from './providers/AppProviders.tsx';

const App = () => {
  return (
    <AppProviders>
      <Header />
      <Container component="main">
        <TableWrapper />
      </Container>
      <Footer />
    </AppProviders>
  );
};

export default App;
