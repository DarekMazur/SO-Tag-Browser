import Paper from '@mui/material/Paper';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { red } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { useTranslation } from 'react-i18next';

const LoadingStatus = ({ status }: { status: string }) => {
  const { t } = useTranslation();
  const statusWrapper = {
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <Paper sx={statusWrapper}>
      {status === 'error' ? (
        <>
          <ErrorOutlineIcon
            sx={{ fontSize: '3rem', color: red[900], margin: '1.5rem' }}
          />
          <Typography paragraph>{t('page.status.error.line1')}</Typography>
          <Typography paragraph>{t('page.status.error.line2')}</Typography>
        </>
      ) : (
        <>
          <CircularProgress size={60} sx={{ margin: '1.5rem' }} />
          <Typography paragraph>{t('page.status.loading')}</Typography>
        </>
      )}
    </Paper>
  );
};

export default LoadingStatus;
