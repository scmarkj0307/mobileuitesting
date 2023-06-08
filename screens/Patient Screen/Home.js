import React,{ useEffect, useState } from 'react';
import { View, Dimensions,Text,BackHandler,ToastAndroid,TouchableHighlight, ImageBackground, Image, StyleSheet,ScrollView } from 'react-native';
import { styles } from '../../style/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IonicsIcon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { APPOINTMENT_URL } from '../../config/APIRoutes';
import moment from 'moment';
import AppointmentCard from '../../components/AppointmentCard';
import { useDispatch, useSelector } from 'react-redux';
import {fetchAppointment} from '../../redux/action/AppointmentAction';

const Home = React.memo(({navigation,setAppointmentId})=>{
    const dispatch = useDispatch();
    const {height, width} = Dimensions.get("screen");
    const [patientAppointment, setPatientAppointment] = useState([]);
    const {patient} = useSelector((state)=>{return state.patient}); 
    const {appointment} = useSelector((state)=>{return state.appointment}); 

    

    const currentDate = moment(new Date()).format("LL");
    const todaysAppointment = appointment.filter((val)=>{  return currentDate === moment(val.appointmentDate).format('LL')&& val.status === "APPROVED" && val.patient.patientId === patient?.patientId; });
    const upcomingAppointment = appointment.filter(val=>{ 
    return currentDate !== moment(val.appointmentDate).format('LL') && moment().isBefore(moment(val.appointmentDate)) && val.patient.patientId === patient?.patientId;
    });


    const viewHandleButton = (value) =>{
      setAppointmentId(value);
      navigation.navigate("Summary")
    }
    return (patient && appointment) && (
      <View style={{...styles.containerGray, height:height, justifyContent:'flex-start', alignItems:'flex-start'}}>
          {/* <View style={{position: 'absolute', top: 0,zIndex: 50, width: width, height: height / 9, borderBottomRightRadius: 100,overflow: 'hidden',}}>
            <ImageBackground source={require('../../assets/images/morning.png')} style={{flex: 1,resizeMode: 'cover',}}>
              <Text>Hello</Text>
            </ImageBackground>
            <View style={{...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0, 0, 0, 0.4)'}}></View>
            </View> */}
          
           <View style={{width:'100%', height:height/2, }}>
            <ImageBackground source={require('../../assets/images/bg-morning.jpg')} style={{flex: 1,resizeMode: 'cover',}}></ImageBackground>
            <View style={{...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(14,116,144,0.6)', flex:1, justifyContent:'center', alignItems:'center', flexDirection:'column', rowGap:8}}>
              <Image source={{uri:patient.profile}} style={{width:80, height:80, borderRadius:100}}/>
              <Text style={{color:'#bae6fd', fontSize:14}}>Good Morning</Text>
              <Text style={{color:'#fff', fontSize:18, letterSpacing:2, fontWeight:'bold'}}>{patient.firstname}</Text>
            </View>
            
          </View> 
          
          <ScrollView style={{backgroundColor:'#fafafa', width:'100%', height:(height/2.3), borderTopLeftRadius:30, borderTopRightRadius:30, position:'absolute', bottom:0, paddingHorizontal:15, paddingVertical:20, zIndex:50, display:'flex', flexDirection:'column', gap:10, paddingBottom:70}}>
            <AppointmentCard title="Today's Appointment" dataList={todaysAppointment} bgColor={'#ccfbf1'}fontColor={'#10b981'} subColor={'#06b6d4'} viewEvent={viewHandleButton} />
            <AppointmentCard title='Upcoming Appointment' dataList={upcomingAppointment} bgColor={'#fef3c7'} fontColor={'#f59e0b'} subColor={'#f59e0b'} showDate={true} viewEvent={viewHandleButton}  />
          </ScrollView>
        



          {/* <View style={{width:'100%', height:height/2.5, backgroundColor:'#06b6d4', display:'flex', justifyContent:'center', alignItems:'center', gap:15}}>
            <Image source={{uri:patient.profile}} style={{width:120, height:120, borderRadius:300}} />
            <View>
            <Text style={{color:'#fff', fontSize:20, fontWeight:'bold'}}>Hello, {patient.firstname}</Text>
            </View>
            <Button title='Logout' onPress={logoutButton} />
          </View> */}
      </View>
    )
})

export default Home