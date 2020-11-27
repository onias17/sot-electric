import react from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="nav">
        <a href="#" className="title">Sons of Thunder</a>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;