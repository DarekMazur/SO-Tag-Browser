import { TableBody, TableCell, TableRow } from '@mui/material';
import { mockTags } from '../../../mocks/mocks.ts';
import TagLink from '../../Atoms/TagLink.tsx';
import TableHeader from '../../Molecules/TableHeader/TableHeader.tsx';
import TableProvider from '../../../providers/TableProvider.tsx';

const TableWrapper = () => {
  const headers: string[] = ['Tag', 'Posts count', ''];

  return (
    <TableProvider>
      <TableHeader headers={headers} />
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
    </TableProvider>
  );
};

export default TableWrapper;
