import React from 'react';
import { Button } from 'react-materialize';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section id="services" className="services">
      <h2 className="center-align">SERVICES</h2>
      <aside>
        <ul>
          <li>Residential</li>
          <li>Commercial</li>
          <li>Industrial</li>
          <div className="right-align">
            <Link to={'/newappointment'}>Schedule An Appointment</Link>
          </div>
        </ul>
      </aside>
    </section>
  );
};

export default Services;