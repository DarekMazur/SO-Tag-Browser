import { Container } from '@mui/material';
import { blueGrey, orange } from '@mui/material/colors';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Title from '../../Atoms/Title/Title.tsx';
import LanguageSwitcher from '../../Molecules/LanguageSwitcher/LanguageSwitcher.tsx';

const Header = () => {
  const { t } = useTranslation();
  const styledHeaderWrapper = {
    backgroundColor: blueGrey[300],
    width: '100%',
    borderBottom: `10px solid ${orange[700]}`,
  };

  return (
    <Container component="header" maxWidth={false} sx={styledHeaderWrapper}>
      <Box sx={{ position: 'absolute', top: '10px', right: '10px' }}>
        <LanguageSwitcher />
      </Box>
      <Title label={t('page.title')} />
    </Container>
  );
};

export default Header;
