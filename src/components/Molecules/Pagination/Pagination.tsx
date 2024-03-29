import { ChangeEvent, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TablePagination from '@mui/material/TablePagination';
import {
  RootState,
  setPagination,
  setTagsPerPage,
  useGetTagsQuery,
} from '../../../store';
import PaginationActions from '../PaginationActions/PaginationActions.tsx';

const Pagination = () => {
  const pagination = useSelector((state: RootState) => state.pagination);
  const tagsPerPage = useSelector((state: RootState) => state.tagsPerPage);
  const dispatch = useDispatch();
  const { data: tags } = useGetTagsQuery();
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
      count={tags ? tags.items.length : 0}
      rowsPerPage={tagsPerPage}
      page={pagination}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      labelRowsPerPage="Tags per page"
      ActionsComponent={PaginationActions}
    />
  );
};

export default Pagination;
