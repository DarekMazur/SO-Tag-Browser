import { Container } from '@mui/material';
import Copyrights from '../../Atoms/Copyrights/Copyrights.tsx';

const Footer = () => {
  const styledFooterWrapper = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '5rem',
  };

  return (
    <Container component="footer" sx={styledFooterWrapper}>
      <Copyrights />
    </Container>
  );
};

export default Footer;
