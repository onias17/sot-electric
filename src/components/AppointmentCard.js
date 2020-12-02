import React from 'react';
import { Link } from 'react-router-dom';

const AppointmentCard = (props) => {
  return (
    <Link to={`/appointments/${props.appointment._id}`}>
      <div>
        <h1>Appointment Card</h1>
        <h2>{props.appointment.buildingType}</h2>
        <h2>{props.appointment.description}</h2>
        <h2>{props.appointment.address}</h2>
      </div>
    </Link>
  );
};

export default AppointmentCard;