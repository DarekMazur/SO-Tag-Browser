import { TableBody, TableCell, TableRow } from '@mui/material';
import { useSelector } from 'react-redux';
import { mockTags } from '../../../mocks/mocks.ts';
import TagLink from '../../Atoms/TagLink/TagLink.tsx';
import TableItem from '../../Atoms/TableItem/TableItem.tsx';
import { RootState } from '../../../store';

const TableContent = () => {
  const pagination = useSelector((state: RootState) => state.pagination);
  const tagsPerPage = useSelector((state: RootState) => state.tagsPerPage);

  const emptyRows =
    pagination > 0
      ? Math.max(0, (1 + pagination) * tagsPerPage - mockTags.items.length)
      : 0;

  return (
    <TableBody>
      {(tagsPerPage > 0
        ? mockTags.items.slice(
            pagination * tagsPerPage,
            pagination * tagsPerPage + tagsPerPage,
          )
        : mockTags.items
      ).map((tag, index) => (
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
