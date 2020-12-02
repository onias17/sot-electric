import React from 'react';
import AppointmentModel from '../models/appointment';
import AppointmentCard from '../components/AppointmentCard';

class AppointmentList extends React.Component {
  state = {
    apppointments: []
  };

  componentDidMount() {
    // make an API call
    AppointmentModel.all().then((data) => {
      console.log('data', data);

      this.setState({ appointments: data.appointments });
    });
  };

  renderApointments() {
    return this.state.appointments.map((appointment, index) => {
      return (
        <AppointmentCard appointment={appointment} key={appointment._id} />
      );
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.renderApointments()}
        </ul>
      </div>
    );
  };
};

export default AppointmentList;