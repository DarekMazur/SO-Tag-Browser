import { TableCell } from '@mui/material';
import { FC, ReactNode } from 'react';

interface ITableItemProps {
  label: string | ReactNode;
}

const tableItems: FC<ITableItemProps> = ({ label }) => {
  return <TableCell>{label}</TableCell>;
};

export default tableItems;
