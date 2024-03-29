import { FC } from 'react';
import LaunchIcon from '@mui/icons-material/Launch';
import { Link } from '@mui/material';
import { orange } from '@mui/material/colors';
import { useTranslation } from 'react-i18next';
import { ITagLink } from '../../../types/types.ts';

const TagLink: FC<ITagLink> = ({ to }) => {
  const { t } = useTranslation();

  return (
    <Link
      href={`https://stackoverflow.com/questions/tagged/${to}`}
      target="_blank"
      rel="noreferrer"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '0.5rem',
        textDecoration: 'none',
        fontWeight: 500,
        color: orange[900],
        '&:hover': {
          color: orange[700],
        },
      }}
    >
      {t('table.link', { tag: to })} <LaunchIcon fontSize="small" />
    </Link>
  );
};

export default TagLink;
