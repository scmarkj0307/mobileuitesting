import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Patient from './Patient';
import Services from './Services';
import Teeth from './Teeth';
import Schedule from './Schedule';

function Treatment(props) {
  const Stack = createNativeStackNavigator();
  const [treatmentDetails, setTreatmentDetails] = useState({
    patientId:"",
    dentalServices: [],
    totalServiceTime: '',
    totalAmount: 0.00,
    toothList:[]
  });
  return (
    <>
    <Stack.Navigator initialRouteName='Patient'>
      <Stack.Screen name='Patient' 
        options={{ headerTitle: "Select Patient" }}>
        {props => <Patient treatmentDetails={treatmentDetails} setTreatmentDetails={setTreatmentDetails} {...props} />}
      </Stack.Screen>
      <Stack.Screen name='Services' 
        options={{ headerTitle: "Select Services" }}>
        {props => <Services treatmentDetails={treatmentDetails} setTreatmentDetails={setTreatmentDetails} {...props} />}
      </Stack.Screen>
      <Stack.Screen name='Teeth' 
        options={{ headerTitle: "Select Teeth" }}>
        {props => <Teeth treatmentDetails={treatmentDetails} setTreatmentDetails={setTreatmentDetails} {...props} />}
      </Stack.Screen>
      <Stack.Screen name='Schedule' 
        options={{ headerTitle: "Select Schedule" }}>
        {props => <Schedule treatmentDetails={treatmentDetails} setTreatmentDetails={setTreatmentDetails} {...props} />}
      </Stack.Screen>
    </Stack.Navigator>

    </>
  )
}

export default Treatment