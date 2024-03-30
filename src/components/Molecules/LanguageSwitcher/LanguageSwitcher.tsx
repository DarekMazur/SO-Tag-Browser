import { ButtonGroup } from '@mui/material';
import LangButton from '../../Atoms/LangButon/LangButton.tsx';
import flagGb from '../../../assets/icons/gb.svg';
import flagPl from '../../../assets/icons/pl.svg';

const LanguageSwitcher = () => {
  const langs = {
    en: { nativeFlag: flagGb, nativeName: 'English', nativeShort: 'en' },
    pl: { nativeFlag: flagPl, nativeName: 'Polish', nativeShort: 'pl' },
  };

  return (
    <ButtonGroup variant="text">
      {Object.keys(langs).map((lng) => (
        <LangButton
          key={langs[lng as keyof typeof langs].nativeName}
          lng={langs[lng as keyof typeof langs].nativeShort}
          url={langs[lng as keyof typeof langs].nativeFlag}
          alt={langs[lng as keyof typeof langs].nativeName}
        />
      ))}
    </ButtonGroup>
  );
};

export default LanguageSwitcher;
