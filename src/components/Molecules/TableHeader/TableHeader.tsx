import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { FC } from 'react';
import { ITableHeaders } from '../../../types/types.ts';

const TableHeader: FC<ITableHeaders> = ({ headers }) => {
  return (
    <TableHead>
      <TableRow>
        {headers.map((header) => (
          <TableCell key={header || 'link'}>
            <TableSortLabel
              active={false}
              hideSortIcon={!header}
              direction="asc"
              onClick={() => {}}
            >
              {header}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
