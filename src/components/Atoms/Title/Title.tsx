import { Typography } from '@mui/material';

const Title = ({ label }: { label: string }) => {
  return (
    <Typography variant="h1" component="h1">
      {label}
    </Typography>
  );
};

export default Title;
