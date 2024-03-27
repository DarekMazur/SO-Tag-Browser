import { mockTags } from './mocks/mocks.ts';

const App = () => {
  const perPageCount: number[] = [5, 15, 25, 50, 100];

  return (
    <>
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
    </>
  );
};

export default App;
