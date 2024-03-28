import { TableBody, TableRow } from '@mui/material';
import { useSelector } from 'react-redux';
import { mockTags } from '../../../mocks/mocks.ts';
import TagLink from '../../Atoms/TagLink/TagLink.tsx';
import TableItem from '../../Atoms/TableItem/TableItem.tsx';

const TableContent = () => {
  const pagination = useSelector((state) => state.pagination);
  const tagsPerPage = useSelector((state) => state.tagsPerPage);

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
    </TableBody>
  );
};

export default TableContent;
