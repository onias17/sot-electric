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
            <h5>PHONE NUMBER</h5>
            <p>+1 (760) 662-1909</p>
            <h5>EMAIL</h5>
            <p><a href="" target="_blank">sonsofthundereletric@gmail.com</a></p>
            <h5>HOURS OF OPERATION</h5>
            <p>Monday - Friday: 8am - 5pm</p>
            <h5>SOCIAL MEDIA</h5>
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