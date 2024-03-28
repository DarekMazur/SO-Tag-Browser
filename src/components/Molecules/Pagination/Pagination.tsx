import { TablePagination } from '@mui/material';
import { ChangeEvent, MouseEvent, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ITag } from '../../../types/types.ts';
import { setPagination, setTagsPerPage } from '../../../store';

const Pagination: FC<ITag> = ({ items }) => {
  const pagination = useSelector((state) => state.pagination);
  const tagsPerPage = useSelector((state) => state.tagsPerPage);
  const dispatch = useDispatch();
  const perPageCount: number[] = [5, 15, 25, 50, 100];

  const handleChangePage = (
    _event: MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    dispatch(setPagination(newPage));
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    dispatch(setTagsPerPage(Number(event.target.value)));
    dispatch(setPagination(0));
  };

  return (
    <TablePagination
      rowsPerPageOptions={perPageCount}
      component="div"
      count={items.length}
      rowsPerPage={tagsPerPage}
      page={pagination}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      labelRowsPerPage="Tags per page"
    />
  );
};

export default Pagination;
