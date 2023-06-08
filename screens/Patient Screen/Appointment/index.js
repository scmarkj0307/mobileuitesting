import React,{useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Services from './Services';
import Schedule from './Schedule';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices } from '../../../redux/action/ServicesAction';
import { fetchDentists } from '../../../redux/action/DentistAction';

function index({navigation,  dispatch}) {
  const Stack = createNativeStackNavigator();
  const save = useDispatch();
  const {patient} = useSelector((state)=>{return state.patient});
  const services = useSelector((state)=>{return state.services}); 
  const dentists = useSelector((state)=>{return state.dentist}); 
  const [appointmentDetails, setAppointmentDetails] = useState({
    patientId: patient?.patientId,
    dentistId: '',
    dentalServices: [],
    date: '',
    timeStart: '',
    timeEnd: '',
    totalAmmount: '',
    method: '', 
    type: '',
    totalServiceTime: '', 
  });

  useEffect(()=>{
    dispatch(fetchServices());
    dispatch(fetchDentists());
  },[]);
  return (!services.loading && !dentists.loading)&&(
    <Stack.Navigator initialRouteName='Services'>
        <Stack.Screen name='Services' options={{headerTitle:'Step 1 of 5'}}>
             {props=><Services appointmentDetails={appointmentDetails} setAppointmentDetails={setAppointmentDetails} {...props} /> }
        </Stack.Screen>
        <Stack.Screen name='Schedule' options={{headerTitle:'Step 2 of 5'}}>
             {props=><Schedule appointmentDetails={appointmentDetails} setAppointmentDetails={setAppointmentDetails} {...props} />}
        </Stack.Screen>
    </Stack.Navigator>
  )
}

export default index