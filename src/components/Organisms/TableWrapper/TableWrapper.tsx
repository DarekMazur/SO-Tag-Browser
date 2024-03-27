import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import Pagination from '../../Molecules/Pagination/Pagination.tsx';
import { mockTags } from '../../../mocks/mocks.ts';
import TagLink from '../../Atoms/TagLink.tsx';
import TableHeader from '../../Molecules/TableHeader/TableHeader.tsx';

const TableWrapper = () => {
  const headers: string[] = ['Tag', 'Posts count', ''];

  return (
    <TableContainer>
      <Pagination items={mockTags.items} />
      <Paper elevation={2}>
        <Table>
          <TableHeader headers={headers} />
          <TableBody>
            {mockTags.items.map((tag) => (
              <TableRow key={tag.name}>
                <TableCell>{tag.name}</TableCell>
                <TableCell>
                  {new Intl.NumberFormat().format(tag.count)}
                </TableCell>
                <TableCell>
                  <TagLink to={tag.name} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </TableContainer>
  );
};

export default TableWrapper;
