import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { NavItem, Navbar, Dropdown, Divider, Icon } from 'react-materialize';

const Nav = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <Navbar
      alignLinks="right"
      brand={<Link className="brand-logo" to={'/'}>Sons of Thunder</Link>}
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}
    >
      <NavItem href="">
        About
      </NavItem>
      <NavItem href="">
        Services
      </NavItem>
      <NavItem href="">
        Contact Us
      </NavItem>
      <NavItem href="">
        <LoginButton />
      </NavItem>
      <Dropdown
        id="Dropdown_6"
        options={{
          alignment: 'left',
          autoTrigger: true,
          closeOnClick: true,
          constrainWidth: true,
          container: null,
          coverTrigger: true,
          hover: false,
          inDuration: 150,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 250
        }}
        trigger={
          <a href="#!">
            {isAuthenticated && (
              <li><img src={user.picture} alt={user.name} className="dropdown-trigger nav-img" data-target="dropdown1" /></li>
            )}
          </a>
        }
      >
        <a href="">
          <Link to={'/profile'}>View Profile</Link>
        </a>
        <Divider />
        <a href="">
          <LogoutButton />
        </a>
      </Dropdown>
    </Navbar>
  );
};

export default Nav;