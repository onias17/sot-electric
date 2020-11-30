import react from 'react';
import Navbar from './components/Navbar';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import Footer from './components/Footer';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
      <>
        <Navbar />
        <Profile />
        <Footer />
      </>
  );
};

export default App;
