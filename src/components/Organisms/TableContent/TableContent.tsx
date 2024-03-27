import { TableBody, TableCell, TableRow } from '@mui/material';
import { mockTags } from '../../../mocks/mocks.ts';
import TagLink from '../../Atoms/TagLink.tsx';

const TableContent = () => {
  return (
    <TableBody>
      {mockTags.items.map((tag) => (
        <TableRow key={tag.name}>
          <TableCell>{tag.name}</TableCell>
          <TableCell>{new Intl.NumberFormat().format(tag.count)}</TableCell>
          <TableCell>
            <TagLink to={tag.name} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TableContent;
