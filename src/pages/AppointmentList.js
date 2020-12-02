import React from 'react';
import AppointmentModel from '../models/appointment';

class AppointmentList extends React.Component {
  state = {
    apppointments: []
  };

  componentDidMount() {
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