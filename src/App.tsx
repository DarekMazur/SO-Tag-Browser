import { ThemeProvider, Typography } from '@mui/material';
import { mockTags } from './mocks/mocks.ts';
import theme from './providers/ThemeProvider.ts';

const App = () => {
  const perPageCount: number[] = [5, 15, 25, 50, 100];

  return (
    <ThemeProvider theme={theme}>
      <Typography>
        <header>
          <h1>Lorem ipsum</h1>
        </header>
        <main>
          <span>Tags per page</span>
          <ul>
            {perPageCount.map((count) => (
              <li key={count}>{count}</li>
            ))}
          </ul>
          <table>
            <thead>
              <tr>
                <th>Tag</th>
                <th>Posts count</th>
                <th>LINK</th>
              </tr>
            </thead>
            <tbody>
              {mockTags.items.map((tag) => (
                <tr key={tag.name}>
                  <th>{tag.name}</th>
                  <td>{new Intl.NumberFormat().format(tag.count)}</td>
                  <td>
                    <a
                      href={`https://stackoverflow.com/questions/tagged/${tag.name}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      icon
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>pagination</div>
        </main>
        <footer>&copy; 2024 Darek Mazur</footer>
      </Typography>
    </ThemeProvider>
  );
};

export default App;
