import react from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { user, isAuthenticated } = useAuth0();


  return (
    <nav>
      <div className="nav">
        <a href="#" className="title">Sons of Thunder</a>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact Us</a></li>
          {isAuthenticated && (
          <li>
            <img src={user.picture} alt={user.name} className="nav-img"/>
          </li>
          )}
          <li><LoginButton/></li>
          <li><LogoutButton/></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;