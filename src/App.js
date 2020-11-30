import react from 'react';
import Navbar from './components/Navbar';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

function App() {
  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
