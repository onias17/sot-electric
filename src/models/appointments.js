const url = ``;

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
    return fetch(url, {
      method: 'POST',
      header: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newAppointment)
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log('error fetching data in AppointmentModel.create', err);
        return { message: 'error fetching data in AppointmentModel.create'};
      });
  };
};

export default AppointmentModel;