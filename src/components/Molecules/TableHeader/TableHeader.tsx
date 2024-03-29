import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

  return (
    <TableHead>
      <TableRow>
        {headers.map((header) => (
          <TableCell key={header.name} align={header.label ? 'right' : 'left'}>
            <TableSortLabel
              active={orderBy === header.name}
              hideSortIcon={!header.isSortable}
              direction={orderBy === header.name ? order : 'asc'}
              onClick={createSortHandler(header.name)}
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
