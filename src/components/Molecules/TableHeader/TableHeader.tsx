import { TableCell, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { ITableHeaders } from '../../../types/types.ts';

const TableHeader: FC<ITableHeaders> = ({ headers }) => {
  return (
    <TableHead>
      <TableRow>
        {headers.map((header) => (
          <TableCell key={header || 'link'}>{header}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
