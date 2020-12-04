import React from 'react';
import { Link } from 'react-router-dom';

const AppointmentCard = (props) => {
  return (
    <div>
      {/* <Link to={`/appointments/${props.appointment._id}`}> */}
        <div>
          <p>{props.appointment.buildingType}</p>
          <p>{props.appointment.description}</p>
          <p>{props.appointment.address}</p>
          <p>{props.appointment.date}</p>
        </div>
      {/* </Link> */}
      <div>
        <Link to={`/appointments/${props.appointment._id}/edit`}>
          Edit
        </Link>
        <button onClick={() => props.deleteAppointment(props.appointment._id)}>
          Cancel
        </button>
      </div>
      <br />
    </div>
  );
};

export default AppointmentCard;