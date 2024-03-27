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

const App = () => {
  const perPageCount: number[] = [5, 15, 25, 50, 100];

  return (
    <ThemeProvider theme={theme}>
      <Typography>
        <Container component="header">
          <Typography variant="h2" component="h1">
            Lorem ipsum
          </Typography>
        </Container>
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
        <Container
          component="footer"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '5rem',
          }}
        >
          &copy; 2024 Darek Mazur
        </Container>
      </Typography>
    </ThemeProvider>
  );
};

export default App;
