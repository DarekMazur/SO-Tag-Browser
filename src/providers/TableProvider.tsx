import { FC, ReactNode } from 'react';
import { Paper, Table, TableContainer } from '@mui/material';
import Pagination from '../components/Molecules/Pagination/Pagination.tsx';
import { mockTags } from '../mocks/mocks.ts';

interface ITableProvider {
  children: ReactNode;
}

const TableProvider: FC<ITableProvider> = ({ children }) => {
  return (
    <TableContainer>
      <Pagination items={mockTags.items} />
      <Paper elevation={2}>
        <Table>{children}</Table>
      </Paper>
    </TableContainer>
  );
};

export default TableProvider;
