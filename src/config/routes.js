import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import AppointmentList from '../pages/AppointmentList';
import NewAppointment from '../pages/NewAppointment';
import EditAppointment from '../pages/EditAppointment';

export default (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route exact path='/profile' component={ Profile } />
    <Route exact path='/appointmentlist' component={ AppointmentList } />
    <Route path='/appointments/new' component={ NewAppointment } />
    <Route exact path='/appointments/:id/edit' component={ EditAppointment } />
  </Switch>
);