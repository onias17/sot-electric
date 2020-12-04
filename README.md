# Sons of Thunder

## What is SOT: Electric?

Sons of Thunder: Electric is an electrician business app where users can visit and schedule appointments to receive a wide variety of electrical services for thier residential, commercial and/or industrial buildings. Users can create a profile to schedule, review, edit, reschedule and cancel existing appointments.

## Technologies Used
* Mongoose
* Express
* React.js
* Node
* HTML
* CSS
* Materialize

## Installation Steps
(The following dependencies were installed to create this app)
#### Front End
* auth0-react
* materialize-css
* materialize-social
* react-dom-router
* react-json-pretty
* react-materialize

#### Back End 
* body-parser
* cors
* dotenv
* express
* mongoose

## User Stories / Wireframes
#### Users can read about the company, view the services provided, and find the contact information once they land on the home page.
![home](src/images/home_page.png)
#### Users can navigate through the home page and login in to their profile.
![navbar](src/images/navbar.png)
#### Users can schedule an appointment.
![schedule](src/images/schedule.png)
#### Users can view and cancel their appointments.
![manage](src/images/manage.png)
#### Users can edit and reschedule thier appointments.
![edit](src/images/edit_reschedule.png)

## Entity Relationship Diagrams
This app has a one to many relationship where users can create a profile and schedule multiple appointments.

## Unsolved Problems
* format date on front end
* add time to appointment model
* link auth0 user to the appointment model
* styling
* add website tab icon
* prepopulate existing form when editting

## Future Features
* add Google Maps API
* autofill address input
* send email to owner once a user schedules an appointment
* add warning when canceling appointment
* block out dates and times not availble
* save history of previous appointments
* add reviews and ratings of service
* make spanish verison