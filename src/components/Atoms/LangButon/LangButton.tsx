import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const LangButton = ({
  lng,
  url,
  alt,
}: {
  lng: string;
  url: string;
  alt: string;
}) => {
  const { i18n } = useTranslation();

  return (
    <Button
      onClick={() => i18n.changeLanguage(lng)}
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
      <img src={url} alt={alt} />
    </Button>
  );
};

export default LangButton;
