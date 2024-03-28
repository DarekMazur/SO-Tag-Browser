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

  // const descendingComparator = <T,>(a: T, b: T, orderKey: keyof T) => {
  //   if (b[orderKey] < a[orderKey]) {
  //     return -1;
  //   }
  //   if (b[orderKey] > a[orderKey]) {
  //     return 1;
  //   }
  //   return 0;
  // };

  // const getComparator = <Key extends keyof never>(
  //   orderKey: Key,
  // ): ((
  //   a: { [key in Key]: number | string },
  //   b: { [key in Key]: number | string },
  // ) => number) => {
  //   return order === 'desc'
  //     ? (a, b) => descendingComparator(a, b, orderKey)
  //     : (a, b) => -descendingComparator(a, b, orderKey);
  // };

  // const handleRequestSort = (_event: MouseEvent<unknown>, property: string) => {
  //   const isAsc = orderBy === property && order === 'asc';
  //   dispatch(setOrder(isAsc ? 'desc' : 'asc'));
  //   dispatch(setOrderBy(property));
  // };

  const createSortHandler = (property: string) => () => {
    const isAsc = orderBy === property && order === 'asc';
    dispatch(setOrder(isAsc ? 'desc' : 'asc'));
    dispatch(setOrderBy(property));
  };

  return (
    <TableHead>
      {/* {console.log(keyof mockTags.items)} */}
      <TableRow>
        {headers.map((header) => (
          <TableCell key={header.name}>
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
