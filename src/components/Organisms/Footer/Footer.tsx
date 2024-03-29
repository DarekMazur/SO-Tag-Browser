import { Container } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import Copyrights from '../../Atoms/Copyrights/Copyrights.tsx';

const Footer = () => {
  const styledFooterWrapper = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '5rem',
    backgroundColor: blueGrey[300],
    width: '100%',
  };

  return (
    <Container component="footer" sx={styledFooterWrapper} maxWidth={false}>
      <Copyrights />
    </Container>
  );
};

export default Footer;
