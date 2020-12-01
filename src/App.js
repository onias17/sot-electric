import react from 'react';
import Navbar from './components/Navbar';
import routes from './config/routes';
import Footer from './components/Footer';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
      <>
        <Navbar />
        { routes }
        <Footer />
      </>
  );
};

export default App;
