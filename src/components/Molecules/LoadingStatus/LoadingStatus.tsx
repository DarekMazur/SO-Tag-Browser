import Paper from '@mui/material/Paper';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { red } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingStatus = ({ status }: { status: string }) => {
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
            sx={{ fontSize: '3rem', color: red[900], padding: '1.5rem' }}
          />
          <Typography paragraph>
            Something went wrong, we couldn&apos;t get data from
            StackOverflow...
          </Typography>
          <Typography paragraph>Please try again later</Typography>
        </>
      ) : (
        <>
          <CircularProgress size={60} sx={{ padding: '1.5rem' }} />
          <Typography paragraph>Loading...</Typography>
        </>
      )}
    </Paper>
  );
};

export default LoadingStatus;
