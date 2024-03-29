import { Container } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import Title from '../../Atoms/Title/Title.tsx';

const Header = () => {
  const styledHeaderWrapper = {
    backgroundColor: blueGrey[300],
    width: '100%',
  };
  return (
    <Container component="header" maxWidth={false} sx={styledHeaderWrapper}>
      <Title label="StackOverflow tags" />
    </Container>
  );
};

export default Header;
