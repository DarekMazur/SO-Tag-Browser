import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Pagination from '../../Molecules/Pagination/Pagination.tsx';
import { mockTags } from '../../../mocks/mocks.ts';

const TableWrapper = () => {
  return (
    <TableContainer>
      <Pagination items={mockTags.items} />
      <Paper elevation={2}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Tag</TableCell>
              <TableCell>Posts count</TableCell>
              <TableCell>LINK</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockTags.items.map((tag) => (
              <TableRow key={tag.name}>
                <TableCell>{tag.name}</TableCell>
                <TableCell>
                  {new Intl.NumberFormat().format(tag.count)}
                </TableCell>
                <TableCell>
                  <a
                    href={`https://stackoverflow.com/questions/tagged/${tag.name}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    icon
                  </a>
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
