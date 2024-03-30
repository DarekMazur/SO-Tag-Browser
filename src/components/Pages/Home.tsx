import { Container } from '@mui/material';
import Header from '../Organisms/Header/Header.tsx';
import TableWrapper from '../Organisms/TableWrapper/TableWrapper.tsx';
import Footer from '../Organisms/Footer/Footer.tsx';
import { useMinHeight } from '../../hooks/useMinHeight.ts';

const Home = () => {
  const height = useMinHeight();

  return (
    <>
      <Header />
      <Container component="main" sx={{ minHeight: height, padding: '2rem 0' }}>
        <TableWrapper />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
