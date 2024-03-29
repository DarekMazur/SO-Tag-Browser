import { Container } from '@mui/material';
import Header from './components/Organisms/Header/Header.tsx';
import Footer from './components/Organisms/Footer/Footer.tsx';
import TableWrapper from './components/Organisms/TableWrapper/TableWrapper.tsx';
import AppProviders from './providers/AppProviders.tsx';
import { useMinHeight } from './hooks/useMinHeight.ts';

const App = () => {
  const height = useMinHeight();
  return (
    <AppProviders>
      <Header />
      <Container component="main" sx={{ minHeight: height, padding: '2rem 0' }}>
        <TableWrapper />
      </Container>
      <Footer />
    </AppProviders>
  );
};

export default App;
