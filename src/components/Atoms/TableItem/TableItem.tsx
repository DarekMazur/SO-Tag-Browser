import { TableCell } from '@mui/material';
import { FC, ReactNode } from 'react';

interface ITableItemProps {
  label: string | ReactNode;
  align?: 'left' | 'center' | 'right';
}

const tableItems: FC<ITableItemProps> = ({ label, align }) => {
  return <TableCell align={align || 'left'}>{label}</TableCell>;
};

export default tableItems;
