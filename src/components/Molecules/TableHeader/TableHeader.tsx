import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { blueGrey } from '@mui/material/colors';
import { ITableHeeadersProps } from '../../../types/types.ts';
import { RootState, setOrder, setOrderBy } from '../../../store';

const TableHeader: FC<ITableHeeadersProps> = ({ headers }) => {
  const order = useSelector((state: RootState) => state.order);
  const orderBy = useSelector((state: RootState) => state.orderBy);
  const dispatch = useDispatch();

  const createSortHandler = (property: string) => () => {
    const isAsc = orderBy === property && order === 'asc';
    dispatch(setOrder(isAsc ? 'desc' : 'asc'));
    dispatch(setOrderBy(property));
  };

  const styledCell = {
    '&:nth-of-type(1)': {
      width: '10%',
    },
    '&:nth-of-type(2)': {
      width: '30%',
    },
    '&:nth-of-type(3)': {
      width: '30%',
    },
    '&:nth-of-type(4)': {
      width: '30%',
    },
  };

  const styledSort = {
    color: blueGrey[100],
    '& .MuiTableSortLabel-icon': {
      color: `${blueGrey[100]} !important`,
    },
    '&:hover': {
      color: `${blueGrey.A100} !important`,
      opacity: '0.5',
    },
    '&.Mui-active': {
      color: `${blueGrey[100]} !important`,
    },
  };

  return (
    <TableHead sx={{ backgroundColor: blueGrey[900] }}>
      <TableRow>
        {headers.map((header) => (
          <TableCell
            key={header.name}
            align={header.label ? 'right' : 'left'}
            sx={styledCell}
          >
            <TableSortLabel
              active={orderBy === header.name}
              hideSortIcon={!header.isSortable}
              direction={orderBy === header.name ? order : 'asc'}
              onClick={createSortHandler(header.name)}
              sx={styledSort}
            >
              {header.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
