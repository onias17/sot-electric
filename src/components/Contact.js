import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="center-align">CONTACT US</h2>
      <div>
        <p>Phone Number: 123-456-7890</p>
        <p>Email: sonsofthundereletric@gmail.com</p>
        <p>Social Media:
          <Link to=""><i className="fab fa-instagram"></i></Link>
          <Link to=""></Link>
          <Link to=""></Link>
        </p>

      </div>
    </section>
  );
};

export default Contact;