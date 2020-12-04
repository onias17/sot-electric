import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import AppointmentModel from '../models/appointment';

const EditAppointment = (props) => {
  const { user, isAuthenticated } = useAuth0();

  const [buildingType, setBuildingType] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');

  const formBuildingType = (event) => {
    setBuildingType(event.target.value);
  };
  
  const formDescription = (event) => {
    setDescription(event.target.value);
  };
  
  const formAddress = (event) => {
    setAddress(event.target.value);
  };
  
  const formDate = (event) => {
    setDate(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const appointmentForm = {
      buildingType: buildingType,
      description: description,
      address: address,
      date: date,
    };
    
    const appointmentId = props.match.params.id;

    AppointmentModel.update(appointmentId, appointmentForm)
      .then((data) => {
        props.history.push('/appointmentlist');
      });
  };

  return (
    <div>
      <h2>Edit Your Appointment</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="buildingType">Building Type</label>
          <input 
            onChange={formBuildingType}
            value={buildingType}
            type="text"
            name="buildingType"
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input 
            onChange={formDescription}
            value={description}
            type="text"
            name="description"
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input 
            onChange={formAddress}
            value={address}
            type="text"
            name="address"
          />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input 
            onChange={formDate}
            value={date}
            type="date"
            name="date"
          />
        </div>
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default EditAppointment;