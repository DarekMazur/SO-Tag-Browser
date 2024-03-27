import { TablePagination } from '@mui/material';
import { FC } from 'react';
import { ITag } from '../../../types/types.ts';

const Pagination: FC<ITag> = ({ items }) => {
  const perPageCount: number[] = [5, 15, 25, 50, 100];

  return (
    <TablePagination
      rowsPerPageOptions={perPageCount}
      component="div"
      count={items.length}
      rowsPerPage={5}
      page={0}
      onPageChange={() => {}}
      onRowsPerPageChange={() => {}}
      labelRowsPerPage="Tags per page"
    />
  );
};

export default Pagination;
