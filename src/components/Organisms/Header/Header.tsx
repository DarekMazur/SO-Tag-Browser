import { Button, Container } from '@mui/material';
import { blueGrey, orange } from '@mui/material/colors';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Title from '../../Atoms/Title/Title.tsx';
import flagGb from '../../../assets/icons/gb.svg';
import flagPl from '../../../assets/icons/pl.svg';

const Header = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const styledHeaderWrapper = {
    backgroundColor: blueGrey[300],
    width: '100%',
    borderBottom: `10px solid ${orange[700]}`,
  };

  const langs = {
    en: { nativeFlag: flagGb, nativeName: 'English', nativeShort: 'en' },
    pl: { nativeFlag: flagPl, nativeName: 'Polish', nativeShort: 'pl' },
  };

  return (
    <Container component="header" maxWidth={false} sx={styledHeaderWrapper}>
      <Box sx={{ position: 'absolute', top: '10px', right: '10px' }}>
        {Object.keys(langs).map((lng) => (
          <Button
            key={langs[lng as keyof typeof langs].nativeName}
            onClick={() =>
              i18n.changeLanguage(langs[lng as keyof typeof langs].nativeShort)
            }
            sx={{
              minWidth: '35px',
              opacity: i18n.resolvedLanguage === lng ? 1 : 0.5,
              padding: 0,
              transition: 'opacity 200ms ease',
              '& img': {
                width: '22px',
              },
              '&:hover': {
                opacity: 1,
              },
            }}
          >
            <img
              src={langs[lng as keyof typeof langs].nativeFlag}
              alt={langs[lng as keyof typeof langs].nativeName}
            />
          </Button>
        ))}
      </Box>
      <Title label={t('page.title')} />
    </Container>
  );
};

export default Header;
