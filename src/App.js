import react from 'react';
import Nav from './components/Nav';
import routes from './config/routes';
import Footer from './components/Footer';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
      <div className="main-app">
        <Nav />
        { routes }
        <Footer />
      </div>
  );
};

export default App;
