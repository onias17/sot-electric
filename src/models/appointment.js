const url = `http://localhost:4000/api/v1/appointments`;

class AppointmentModel {
  static all() {
    return fetch(url)
      .then((res) => res.json())
      .catch((err) => {
        console.log('error fetching data in AppointmentModel.all', err)
        return {
          appointment: []
        };
      });
  };

  static getOne(id) {
    return fetch(`${url}/${id}`)
      .then((res) => res.json())
      .catch((err) => {
        console.log('error fetching data in AppointmentModel.getOne', err)
        return { appoitnment: {} };
      });
  };

  static create(newAppointment) {
    console.log(newAppointment);
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(newAppointment),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log('error fetching data in AppointmentModel.create', err);
        return { message: 'error fetching data in AppointmentModel.create'};
      });
  };

  static update(appointmentId, updatedAppointment) {
    return fetch(`${url}/${appointmentId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedAppointment)
    })
    .then((res) => res.json())
    .catch((res) => {
      console.log('error fetching data in AppointmentModel.update');
      return { appointment: {} }
    });
  };

  static delete(appointmentId) {
    return fetch(`${url}/${appointmentId}`, {
      method: 'DELETE',
    })
    .then((res) => res.json())
    .catch((err) => {
      console.log('error fetching data in AppointmentModel.delete', err);
      return { appointment: {} };
    });
  };
};

export default AppointmentModel;