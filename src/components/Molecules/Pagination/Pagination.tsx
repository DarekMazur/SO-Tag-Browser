import { ChangeEvent, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TablePagination from '@mui/material/TablePagination';
import { useTranslation } from 'react-i18next';
import {
  RootState,
  setPage,
  setTagsPerPage,
  useGetTagsQuery,
} from '../../../store';
import PaginationActions from '../PaginationActions/PaginationActions.tsx';

const Pagination = () => {
  const { t } = useTranslation();
  const page = useSelector((state: RootState) => state.page);
  const tagsPerPage = useSelector((state: RootState) => state.tagsPerPage);
  const dispatch = useDispatch();
  const { data: tags } = useGetTagsQuery();
  const perPageCount: number[] = [5, 15, 25, 50, 100];

  const handleChangePage = (
    _event: MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    dispatch(setPage(newPage));
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    dispatch(setTagsPerPage(Number(event.target.value)));
    dispatch(setPage(0));
  };

  return (
    <TablePagination
      rowsPerPageOptions={perPageCount}
      component="div"
      count={tags ? tags.items.length : 0}
      rowsPerPage={tagsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      labelRowsPerPage={t('table.pagination.label')}
      ActionsComponent={PaginationActions}
    />
  );
};

export default Pagination;
