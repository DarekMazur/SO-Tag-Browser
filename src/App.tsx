const App = () => {
  return (
    <>
      <header>
        <h1>Lorem ipsum</h1>
      </header>
      <main>
        <span>Tags per page</span>
        <ul>
          <li>5</li>
          <li>15</li>
          <li>25</li>
          <li>50</li>
          <li>100</li>
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
            <tr>
              <th>javascript</th>
              <td>{new Intl.NumberFormat().format(2528450)}</td>
              <td>
                <a
                  href="https://stackoverflow.com/questions/tagged/javascript"
                  target="_blank"
                  rel="noreferrer"
                >
                  icon
                </a>
              </td>
            </tr>
            <tr>
              <th>python</th>
              <td>{new Intl.NumberFormat().format(2191569)}</td>
              <td>
                <a
                  href="https://stackoverflow.com/questions/tagged/python"
                  target="_blank"
                  rel="noreferrer"
                >
                  icon
                </a>
              </td>
            </tr>
            <tr>
              <th>java</th>
              <td>{new Intl.NumberFormat().format(1917050)}</td>
              <td>
                <a
                  href="https://stackoverflow.com/questions/tagged/java"
                  target="_blank"
                  rel="noreferrer"
                >
                  icon
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <div>pagination</div>
      </main>
      <footer>&copy; 2024 Darek Mazur</footer>
    </>
  );
};

export default App;
