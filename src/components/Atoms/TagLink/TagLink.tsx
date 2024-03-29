import { FC } from 'react';
import LaunchIcon from '@mui/icons-material/Launch';
import { Link } from '@mui/material';
import { indigo } from '@mui/material/colors';
import { ITagLink } from '../../../types/types.ts';

const TagLink: FC<ITagLink> = ({ to }) => {
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
        color: indigo[500],
        '&:hover': {
          color: indigo[900],
        },
      }}
    >
      see posts for {to} <LaunchIcon fontSize="small" />
    </Link>
  );
};

export default TagLink;
