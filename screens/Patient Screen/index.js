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
import { useDispatch, useSelector } from 'react-redux';
import { fetchPatient } from '../../redux/action/PatientAction';
import Loader from '../../components/Loader';
import { fetchAppointment } from '../../redux/action/AppointmentAction';

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
const Main = React.memo(({navigation})=> {
  const dispatch = useDispatch();
  const Stack = createNativeStackNavigator();
  const [appointmentId, setAppointmentId] = useState("");
  const patient = useSelector((state)=>{return state.patient});
  const appointment = useSelector((state)=>{return state.appointment});

  const fetchPatientData = async () => {
    const token = await AsyncStorage.getItem('token');
    dispatch(fetchPatient(token));
  };
  
  const fetchAppointmentData = () => {
    if (patient && patient.patient) {
      dispatch(fetchAppointment(patient.patient.patientId));
    }
  };
  
  useEffect(() => {
    fetchPatientData();
  }, []);
  
  useEffect(() => {
    fetchAppointmentData();
  }, [patient,dispatch]);
  
  if (patient && patient.patient) {
    console.log(patient.patient.patientId, ' ', patient.patient.firstname);
  }

  const navigateToLink = (link) => navigation.navigate(`${link}`);
    return (
      <>
        {patient.loading || appointment.loading && (<Loader loading={appointment.loading} />)}
        {
          (!patient.loading && !appointment.loading) && (
            <>
               <Stack.Navigator initialRouteName='Dashboard'>
                <Stack.Screen name='Dashboard' options={{headerShown: false }}>
                    {props=><Home setAppointmentId={setAppointmentId} {...props}/> }
                </Stack.Screen>
                <Stack.Screen name='Appointment' options={{headerShown: false }}>
                    {props=><Appointment dispatch={dispatch}  {...props}/>}
                </Stack.Screen>
                <Stack.Screen name='Settings' options={{headerShown: false }}>
                    {props=><Settings {  ...props}/>}
                </Stack.Screen>
        
                <Stack.Screen name='Summary' options={{headerTitle:"Appointment Details" }}>
                    {props=><AppointmentDetails appointmentId={appointmentId} setAppointmentId={setAppointmentId} {...props}/>}
                </Stack.Screen>
        
            </Stack.Navigator>
        
            
                <View style={{width:'100%', height:80, position:'relative', bottom:0, backgroundColor:'#fff', display:'flex', justifyContent:'space-evenly', alignItems:'center', flexDirection:'row' }}>
                  {
                  navLinks.map((val, idx)=>(
                    <Pressable style={val?.active ? {backgroundColor:'#06b6d4', padding:5, borderRadius:100}: ''} key={idx} onPress={()=>navigateToLink(val.link)}>
                          <EntypoIcon name={val.icon} size={val?.active ? 40 : 25} color={val?.active ? '#fff':'#06b6d4'}/>
                    </Pressable>
                  ))
                  }
                  <Pressable style={{padding:5,}} onPress={()=>navigateToLink("Settings")}>
                          <IonicsIcon name={'person'} size={25} color={'#06b6d4'}/>
                    </Pressable>
                </View>
               </> 
          )
        }
      </>
    )
})


export default Main