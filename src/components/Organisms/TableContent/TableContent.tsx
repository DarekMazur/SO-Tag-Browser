import { TableBody, TableCell, TableRow } from '@mui/material';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { mockTags } from '../../../mocks/mocks.ts';
import TagLink from '../../Atoms/TagLink/TagLink.tsx';
import TableItem from '../../Atoms/TableItem/TableItem.tsx';
import { RootState } from '../../../store';
import { TOrder } from '../../../types/types.ts';

const TableContent = () => {
  const pagination = useSelector((state: RootState) => state.pagination);
  const tagsPerPage = useSelector((state: RootState) => state.tagsPerPage);
  const orderBy = useSelector((state: RootState) => state.orderBy);
  const order = useSelector((state: RootState) => state.order);

  const descendingComparator = <T,>(a: T, b: T, orderKey: keyof T) => {
    if (b[orderKey] < a[orderKey]) {
      return -1;
    }
    if (b[orderKey] > a[orderKey]) {
      return 1;
    }
    return 0;
  };

  function getComparator<Key extends keyof never>(
    orderValue: TOrder,
    orderKey: Key,
  ): (
    a: { [key in Key]: number | string | boolean },
    b: { [key in Key]: number | string | boolean },
  ) => number {
    return orderValue === 'desc'
      ? (a, b) => descendingComparator(a, b, orderKey)
      : (a, b) => -descendingComparator(a, b, orderKey);
  }

  const emptyRows =
    pagination > 0
      ? Math.max(0, (1 + pagination) * tagsPerPage - mockTags.items.length)
      : 0;

  const visibleRows = useMemo(
    () =>
      mockTags.items
        .sort(getComparator(order, orderBy))
        .slice(
          pagination * tagsPerPage,
          pagination * tagsPerPage + tagsPerPage,
        ),
    [order, orderBy, pagination, tagsPerPage],
  );

  return (
    <TableBody>
      {visibleRows.map((tag, index) => (
        <TableRow key={tag.name}>
          <TableItem label={index + 1 + pagination * tagsPerPage} />
          <TableItem label={tag.name} />
          <TableItem label={new Intl.NumberFormat().format(tag.count)} />
          <TableItem label={<TagLink to={tag.name} />} />
        </TableRow>
      ))}
      {emptyRows > 0 && (
        <TableRow style={{ height: 53 * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
};

export default TableContent;
