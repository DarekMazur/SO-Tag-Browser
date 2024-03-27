import { Container } from '@mui/material';
import Copyrights from '../../Atoms/Copyrights/Copyrights.tsx';

const Footer = () => {
  return (
    <Container
      component="footer"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '5rem',
      }}
    >
      <Copyrights />
    </Container>
  );
};

export default Footer;
