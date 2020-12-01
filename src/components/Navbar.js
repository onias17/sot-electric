import React, { useState } from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { user, isAuthenticated } = useAuth0();

  const [profOptions, setProfOptions] = useState(false);
  
  return (
    <nav>
      <div className="nav">
        <Link to={'/'} className="title">Sons of Thunder</Link>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact Us</a></li>
          {isAuthenticated && (
          <li>
            {/* <img src={user.picture} alt={user.name} className="nav-img" onClick={setProfOptions(true)} /> */}
            <div className="prof-options">
              <ul>
                <li><Link to={'/profile'}></Link></li>
                <li><LoginButton /></li>
                <li><LogoutButton /></li>
              </ul>
            </div>
          </li>
          )}
          <li><LoginButton /></li>
          <li><LogoutButton /></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;