import { TableBody, TableCell, TableRow } from '@mui/material';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { blueGrey } from '@mui/material/colors';
import TagLink from '../../Atoms/TagLink/TagLink.tsx';
import TableItem from '../../Atoms/TableItem/TableItem.tsx';
import { RootState, useGetTagsQuery } from '../../../store';
import { TOrder } from '../../../types/types.ts';

const TableContent = () => {
  const page = useSelector((state: RootState) => state.page);
  const tagsPerPage = useSelector((state: RootState) => state.tagsPerPage);
  const orderBy = useSelector((state: RootState) => state.orderBy);
  const order = useSelector((state: RootState) => state.order);
  const { data: tags } = useGetTagsQuery();

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
    page > 0 && tags
      ? Math.max(0, (1 + page) * tagsPerPage - tags.items.length)
      : 0;

  const visibleRows = useMemo(
    () =>
      tags
        ? [...tags.items]
            .sort(getComparator(order, orderBy))
            .slice(page * tagsPerPage, page * tagsPerPage + tagsPerPage)
        : null,
    [tags, order, orderBy, page, tagsPerPage],
  );

  const styledRow = {
    '&:nth-of-type(odd)': {
      backgroundColor: blueGrey[200],
    },
    '&:nth-of-type(even)': {
      backgroundColor: blueGrey[50],
    },
  };

  return (
    <TableBody>
      {visibleRows
        ? visibleRows.map((tag, index) => (
            <TableRow key={tag.name} sx={styledRow}>
              <TableItem label={index + 1 + page * tagsPerPage} />
              <TableItem align="right" label={tag.name} />
              <TableItem
                align="right"
                label={new Intl.NumberFormat().format(tag.count)}
              />
              <TableItem align="right" label={<TagLink to={tag.name} />} />
            </TableRow>
          ))
        : null}
      {emptyRows > 0 && (
        <TableRow style={{ height: 53 * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
};

export default TableContent;
