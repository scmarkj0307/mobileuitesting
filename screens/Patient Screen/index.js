import React,{ useEffect, useState } from 'react';
import {View, Pressable} from 'react-native';
import { styles } from '../../style/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Appointment from './Appointment/index';
import axios from 'axios';
import { PATIENT_URL } from '../../config/APIRoutes';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IonicsIcon from 'react-native-vector-icons/Ionicons';
import Settings from './Settings';
import AppointmentDetails from './AppointmentDetails';

const navLinks = [
  {
    icon: "home",
    link: 'Dashboard'
  },
  {
    icon: "calendar",
    link: 'Calendar'
  },
  {
    icon: "plus",
    link: 'Appointment',
    active: true
  },
  {
    icon: "message",
    link: 'Message'
  },
  // {
  //   icon: "person",
  //   link: 'Settings'
  // },

]

function Index({navigation}) {
  const Stack = createNativeStackNavigator();
  const [patientDetails, setPatientDetails] = useState(null);
  const [appointmentId, setAppointmentId] = useState("");

  const fetchPatientInformation= async()=> {
    try {
        const token = await AsyncStorage.getItem('token');
        const response = await axios.get(`${PATIENT_URL}/fetchPatient/${token}`);
        if(response.data){
            setPatientDetails(response.data);
        }
    } catch (error) {
        console.log(error);
    }
  }
  useEffect(()=>{ fetchPatientInformation(); },[fetchPatientInformation]);

  const navigateToLink = (link) => navigation.navigate(`${link}`);
  return patientDetails &&  (
    <>
      <Stack.Navigator initialRouteName='Dashboard'>
        <Stack.Screen name='Dashboard' options={{headerShown: false }}>
            {props=>React.cloneElement(<Home />, { patient:patientDetails, setAppointmentId:setAppointmentId, ...props})}
        </Stack.Screen>
        <Stack.Screen name='Appointment' options={{headerShown: false }}>
            {props=>React.cloneElement(<Appointment />, { patientId:patientDetails.patientId, ...props})}
        </Stack.Screen>
        <Stack.Screen name='Settings' options={{headerShown: false }}>
            {props=>React.cloneElement(<Settings />, {  ...props})}
        </Stack.Screen>

        <Stack.Screen name='Summary' options={{headerTitle:"Appointment Details" }}>
            {props=>React.cloneElement(<AppointmentDetails />, { appointmentId:appointmentId, setAppointmentId:setAppointmentId, ...props})}
        </Stack.Screen>

    </Stack.Navigator>


    <View style={{width:'100%', height:80, position:'relative', bottom:0, backgroundColor:'#fff', display:'flex', justifyContent:'space-evenly', alignItems:'center', flexDirection:'row' }}>
      {
       navLinks.map((val, idx)=>(
        <Pressable style={val?.active ? {backgroundColor:'#06b6d4', padding:2, borderRadius:100}: ''} key={idx} onPress={()=>navigateToLink(val.link)}>
              <EntypoIcon name={val.icon} size={val?.active ? 40 : 25} color={val?.active ? '#fff':'#06b6d4'}/>
        </Pressable>
       ))
      }
      <Pressable onPress={()=>navigateToLink("Settings")}>
              <IonicsIcon name={'person'} size={25} color={'#06b6d4'}/>
        </Pressable>
    </View>
    </>
  )
}

export default Index