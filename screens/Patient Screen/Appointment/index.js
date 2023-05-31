import React,{useState} from 'react';
import {View, Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Services from './Services';
import Schedule from './Schedule';

function index({navigation,  patientId}) {
  const Stack = createNativeStackNavigator();
  const [appointmentDetails, setAppointmentDetails] = useState({
    patiendId: patientId,
    dentistId: '',
    dentalServices: [],
    date: '',
    timeStart: '',
    timeEnd: '',
    totalAmmount: '',
    method: '', 
    type: '',
    totalServiceTime: '', 
  })
  return (
    <Stack.Navigator>
        <Stack.Screen name='Services' options={{headerTitle:'Step 1 of 5'}}>
             {props=>React.cloneElement(<Services />, { appointmentDetails:appointmentDetails, setAppointmentDetails:setAppointmentDetails,  ...props})}
        </Stack.Screen>
        <Stack.Screen name='Schedule' options={{headerTitle:'Step 2 of 5'}}>
             {props=>React.cloneElement(<Schedule />, { appointmentDetails:appointmentDetails, setAppointmentDetails:setAppointmentDetails,  ...props})}
        </Stack.Screen>
    </Stack.Navigator>
  )
}

export default index