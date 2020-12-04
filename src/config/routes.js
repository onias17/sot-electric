import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import NewAppointment from '../pages/NewAppointment'
import AppointmentList from '../pages/AppointmentList'
import AppointmentModel from '../models/appointment';

export default (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route exact path='/profile' component={ Profile } />
    <Route exact path='/newappointment' component={ NewAppointment } />
    <Route exact path='/appointmentlist' component={ AppointmentList } />
  </Switch>
);