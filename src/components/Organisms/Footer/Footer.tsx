import { Container } from '@mui/material';

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
      &copy; 2024 Darek Mazur
    </Container>
  );
};

export default Footer;
