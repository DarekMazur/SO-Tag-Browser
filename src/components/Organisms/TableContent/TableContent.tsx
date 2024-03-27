import { TableBody, TableRow } from '@mui/material';
import { mockTags } from '../../../mocks/mocks.ts';
import TagLink from '../../Atoms/TagLink/TagLink.tsx';
import TableItem from '../../Atoms/TableItem/TableItem.tsx';

const TableContent = () => {
  return (
    <TableBody>
      {mockTags.items.map((tag) => (
        <TableRow key={tag.name}>
          <TableItem label={tag.name} />
          <TableItem label={new Intl.NumberFormat().format(tag.count)} />
          <TableItem label={<TagLink to={tag.name} />} />
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TableContent;
