import { ChangeEvent, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TablePagination from '@mui/material/TablePagination';
import { useTranslation } from 'react-i18next';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
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

  const handleChangePage = (
    _event: MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    dispatch(setPage(newPage));
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTagsPerPage(Number(event.target.value)));
    dispatch(setPage(0));
  };

  return (
    <Container
      sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}
    >
      <Box
        sx={{
          fontSize: '1rem',
          '& input': { width: '60px', marginLeft: '10px' },
        }}
      >
        {t('table.pagination.label')}
        <input
          type="number"
          min={0}
          onChange={handleChangeRowsPerPage}
          value={tagsPerPage}
        />
      </Box>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={tags ? tags.items.length : 0}
        rowsPerPage={tagsPerPage}
        page={page}
        onPageChange={handleChangePage}
        ActionsComponent={PaginationActions}
      />
    </Container>
  );
};

export default Pagination;
