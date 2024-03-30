import AppProviders from './providers/AppProviders.tsx';
import Home from './components/Pages/Home.tsx';

const App = () => {
  return (
    <AppProviders>
      <Home />
    </AppProviders>
  );
};

export default App;
