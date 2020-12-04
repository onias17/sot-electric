import React, { useState } from 'react';
import AppointmentModel from '../models/appointment';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Dropdown, Divider, Icon } from 'react-materialize';

const NewAppointment = (props) => {
    const { user, isAuthenticated } = useAuth0();

    const [buildingType, setBuildingType] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [date, setDate] = useState('');
    // const [user, setUser] = useState('');

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
    console.log('called add appt')
    event.preventDefault();

    const appointmentForm = {
      buildingType: buildingType,
      description: description,
      address: address,
      date: date,
      // user: user,
    }
    console.log(JSON.stringify(appointmentForm));

    AppointmentModel.create(JSON.stringify(appointmentForm))
      .then((data) => {
        props.history.push('/appointmentlist');
      });
  };

  return (
    <div>
      <h2>Schedule An Appointment</h2>
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
        {/* <div>
          <Dropdown
            id="Dropdown_6"
            options={{
              alignment: 'left',
              autoTrigger: true,
              closeOnClick: true,
              constrainWidth: true,
              container: null,
              coverTrigger: true,
              hover: false,
              inDuration: 150,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 250
            }}
            trigger={<Button node="button">Drop Me!</Button>}
          >
            <a href="#">
              one
            </a>
            <a href="#">
              two
            </a>
            <Divider />
            <a href="#">
              three
            </a>
            <a href="#">
              <Icon>
                view_module
              </Icon>
              four
            </a>
            <a href="#">
              <Icon>
                cloud
              </Icon>
              {' '}five
            </a>
          </Dropdown> */}
        {/* </div> */}
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
        {isAuthenticated && (
          <input type="submit" value="Submit" />
        )}
      </form>
    </div>
  );
};

export default NewAppointment;