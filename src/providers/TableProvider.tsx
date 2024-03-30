import { FC, ReactNode } from 'react';
import { Paper, Table, TableContainer } from '@mui/material';
import Pagination from '../components/Molecules/Pagination/Pagination.tsx';

interface ITableProvider {
  children: ReactNode;
}

const TableProvider: FC<ITableProvider> = ({ children }) => {
  return (
    <>
      <Pagination />
      <Paper sx={{ borderRadius: '5px' }}>
        <TableContainer sx={{ borderRadius: '5px' }}>
          <Table>{children}</Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default TableProvider;
