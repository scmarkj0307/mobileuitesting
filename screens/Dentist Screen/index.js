import React from 'react';
import { useEffect,useState } from 'react';
import { View, } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActiveDentist } from "../../redux/action/DentistAction";
import { fetchAppointment } from "../../redux/action/AppointmentAction";
import { fetchAllPatient } from "../../redux/action/PatientAction";
import { fetchServices } from "../../redux/action/ServicesAction";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Home";
import Treatment from "./Treatment/index";
import Loader from "../../components/Loader";
import Drawer from "../../components/DentistDrawer";

function Index({navigation}) {
  const dispatch = useDispatch();
  const Stack = createNativeStackNavigator();
  const dentist = useSelector((state)=>{ return state.dentist; });
  const patient = useSelector((state)=>{ return state.patient; });
  const appointment = useSelector((state=>{ return state.appointment }));
  const [isSideNavShow, setSideNavShow]= useState(false);
  
  const navigateToLink = (link) => navigation.navigate(`${link}`);
  const fetchData = async() =>{
    const token = await AsyncStorage.getItem("token");
    dispatch(fetchAppointment());
    dispatch(fetchAllPatient());
    dispatch(fetchServices())
    dispatch(fetchActiveDentist(token));
  }
  useEffect(()=>{fetchData();},[]);
  return(
   <>
    { (dentist.loading || appointment.loading ) && (<Loader loading={dentist.loading} />) }
    {
      (!dentist.loading && !appointment.loading ) && (
        <>
        <Drawer navigation={navigateToLink} isSideNavShow={isSideNavShow} setSideNavShow={setSideNavShow} />
        <View style={{width:"100%", backgroundColor: '#155e75', height: 30 }}></View>
        <Stack.Navigator initialRouteName='Dashboard'>
         <Stack.Screen name='Dashboard' options={{ headerShown: false }}>
           {props => <Home setSideNavShow={setSideNavShow} {...props} />}
         </Stack.Screen>
         <Stack.Screen name="Treatment" options={{ headerShown: false }}>
           {props => <Treatment {...props} />}
         </Stack.Screen>
       </Stack.Navigator>
        </>
      ) 
    }
    </>
  );
}
  

export default React.memo(Index);