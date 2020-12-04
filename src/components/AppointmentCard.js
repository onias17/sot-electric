import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-materialize';

const AppointmentCard = (props) => {
  return (
    <Link to={`/appointments/${props.appointment._id}`}>
      <div>
        <p>{props.appointment.buildingType}</p>
        <p>{props.appointment.description}</p>
        <p>{props.appointment.address}</p>
        <div>
          <button onClick={() => props.deleteAppointment(props.appointment._id)}>
            Edit
          </button>
          <button onClick={() => props.deleteAppointment(props.appointment._id)}>
            Cancel
          </button>
        </div>
      </div>
      <br />
    </Link>
  );
};

export default AppointmentCard;