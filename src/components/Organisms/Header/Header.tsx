import { Container } from '@mui/material';
import { blueGrey, orange } from '@mui/material/colors';
import Title from '../../Atoms/Title/Title.tsx';

const Header = () => {
  const styledHeaderWrapper = {
    backgroundColor: blueGrey[300],
    width: '100%',
    borderBottom: `10px solid ${orange[700]}`,
  };
  return (
    <Container component="header" maxWidth={false} sx={styledHeaderWrapper}>
      <Title label="StackOverflow tags" />
    </Container>
  );
};

export default Header;
