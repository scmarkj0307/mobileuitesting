import { configureStore } from "@reduxjs/toolkit";
import patientReducer from '../reducer/PatientReducer';
import patientVerification from '../reducer/PatientVerificationReducer';
import appointmentReducer from '../reducer/AppointmentReducer';
import servicesReducer from '../reducer/ServicesReducer';
import dentistReducer from '../reducer/DentistReducer';
import thunk from 'redux-thunk';

export default configureStore({
  reducer: {
    patientVerification: patientVerification,
    patient: patientReducer,
    appointment: appointmentReducer,
    services: servicesReducer,
    dentist: dentistReducer
  },
  middleware:[thunk]
});
