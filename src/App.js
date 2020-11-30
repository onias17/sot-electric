import react from 'react';
import Navbar from './components/Navbar';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <>
        <LoginButton />
        <LogoutButton />
        <Profile />
        {/* <Navbar /> */}
      </>
    </div>
  );
}

export default App;
