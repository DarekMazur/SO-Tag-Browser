import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { mockTags } from './mocks/mocks.ts';
import theme from './providers/ThemeProvider.ts';
import Header from './components/Organisms/Header/Header.tsx';
import Footer from './components/Organisms/Footer/Footer.tsx';

const App = () => {
  const perPageCount: number[] = [5, 15, 25, 50, 100];

  return (
    <ThemeProvider theme={theme}>
      <Typography>
        <Header />
        <Container component="main">
          <TablePagination
            rowsPerPageOptions={perPageCount}
            component="div"
            count={mockTags.items.length}
            rowsPerPage={5}
            page={0}
            onPageChange={() => {}}
            onRowsPerPageChange={() => {}}
            labelRowsPerPage="Tags per page"
          />
          <Paper elevation={2}>
            <TableContainer>
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
            </TableContainer>
          </Paper>
        </Container>
        <Footer />
      </Typography>
    </ThemeProvider>
  );
};

export default App;
