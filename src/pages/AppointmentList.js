import React from 'react';
import AppointmentModel from '../models/appointment';
import AppointmentCard from '../components/AppointmentCard';
import { Link } from 'react-router-dom';
 
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
    console.log('deleted appt')
    AppointmentModel.delete(id).then((data) => {
      this.setState((prevState) => {
        const updatedAppointments = prevState.appointments.filter((appointment) => appointment.id !== id);
        this.setState({ appointments: updatedAppointments });

        return window.location.reload();
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
      <div className="all-appt">
        <h1>Your Appointments</h1>
        <div className="right-align">
          <Link to={'/appointments/new'}>Schedule A New Appointment</Link>
        </div>
        <ul className="appointment">
          {this.state.appointments.length && this.renderAppointments()}
        </ul>
      </div>
    );
  };
};

export default AppointmentList;