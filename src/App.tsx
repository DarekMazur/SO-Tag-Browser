import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { mockTags } from './mocks/mocks.ts';
import theme from './providers/ThemeProvider.ts';
import Header from './components/Organisms/Header/Header.tsx';
import Footer from './components/Organisms/Footer/Footer.tsx';
import Pagination from './components/Molecules/Pagination/Pagination.tsx';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography>
        <Header />
        <Container component="main">
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
        </Container>
        <Footer />
      </Typography>
    </ThemeProvider>
  );
};

export default App;
