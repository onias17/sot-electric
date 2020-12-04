import React from 'react';
import AppointmentModel from '../models/appointment';
import AppointmentCard from '../components/AppointmentCard';

class AppointmentList extends React.Component {
  state = {
    appointments: []
  };

  componentDidMount() {
    // make an API call
    AppointmentModel.all().then((data) => {
      console.log('data', data);

      this.setState({ appointments: data.appointments });
    });
  };

  deleteAppointment = (id) => {
    AppointmentModel.delete(id).then((data) => {
      this.setState((prevState) => {
        const updatedAppointments = prevState.appointments.filter((appointment) => appointment.id !== id);

        return { appointments: updatedAppointments };
      });
    });
  };

  renderAppointments() {
    return this.state.appointments.map((appointment) => {
      return (
        <AppointmentCard 
          appointment={appointment} 
          key={appointment._id} 
          deleteAppointment={this.deleteAppointment}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.appointments.length && this.renderAppointments()}
        </ul>
      </div>
    );
  };
};

export default AppointmentList;