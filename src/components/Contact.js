import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-materialize';
import map from '../images/ie_map.jpg';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="center-align contact-us headers">Contact Us</h2>
      <Row>
        <Col
          m={6}
          s={12}
        >
          <div>
            <h6>Phone Number:</h6>
            <p>123-456-7890</p>
            <h6>Email:</h6>
            <p><a href="" target="_blank">sonsofthundereletric@gmail.com</a></p>
            <h6>Hours of Operation</h6>
            <p>Monday - Friday: 8am - 5pm</p>
            <h6>Social Media:</h6>
            <div className="social-media">
              <Link to=""><i className="fab fa-instagram"></i></Link>
              <Link to=""><i className="fab fa-facebook"></i></Link>
              <Link to=""><i className="fab fa-twitter"></i></Link>
              <Link to=""><i className="fab fa-linkedin-in"></i></Link>
            </div>
          </div>
        </Col>
        <Col
          m={6}
          s={12}
        >
          <div className="center-align">
            <div>
              <img src={ map } alt="map" width="400px" height="" />
            </div>
            <div>
              <h6>Areas of Services</h6>
              <p>San Bernandino | Riverside | Fontana | Ontario | Rancho Cucamango</p>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Contact;