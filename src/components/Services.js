import React from 'react';
import { Row, Col } from 'react-materialize';
import { Link } from 'react-router-dom';
import panelBefore from '../images/panel_before.jpeg';
import panelAfter from '../images/panel_after.jpeg';
import remodelBefore from '../images/remodel_before.jpeg';
import remodelAfter from '../images/remodel_after.jpeg';

const Services = () => {
  return (
    <section id="services" className="services">
      <h2 className="center-align service-head headers">Services</h2>
      <Row className="center-align buildings">
        <Col
          m={4}
          s={4}
        >
          <h6>Residential</h6>
        </Col>
        <Col
          m={4}
          s={4}
        >
          <h6>Commercial</h6>
        </Col>
        <Col
          m={4}
          s={4}
        >
          <h6>Industrial</h6>
        </Col>
      </Row>
      <ul className="elec-services">
        <li>Complete Remodeling</li>
        <li>Electrical Wiring</li>
        <li>House Rewiring</li>
        <li>Lighting Installation</li>
        <li>Maintenance</li>
        <li>Outlets and Switches</li>
        <li>Panel Upgrades</li>
        <li>Repairs</li>
        <li>Surge Protection</li>
        <li>Underground Electrical Trenching</li>
        <li>And More...</li>
      </ul>
      <div className="right-align">
        <Link to={'/appointments/new'}>Schedule An Appointment</Link>
      </div>
      <br />
      <Row className="center-align">
        <Col
          m={6}
          s={12}
        >
          <p>Before</p>
          <img src={ panelBefore } alt="panel-before" width="100%" height="" />
        </Col>
        <Col
          m={6}
          s={12}
        >
          <p>After</p>
          <img src={ panelAfter } alt="panel-after" width="100%" height=""/>
        </Col>
        <Col
          m={6}
          s={12}
        >
          <p>Before</p>
          <img src={ remodelBefore } alt="remodel-before" width="100%" height="" />
        </Col>
        <Col
          m={6}
          s={12}
        >
          <p>After</p>
          <img src={ remodelAfter } alt="remodel-after" width="100%" height=""/>
        </Col>
      </Row>
      <hr />
    </section>
  );
};

export default Services;