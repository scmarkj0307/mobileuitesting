import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { View, Text,Dimensions,Image,ScrollView } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { APPOINTMENT_URL } from '../../config/APIRoutes';
import Loader from '../../components/Loader';
import moment, { duration } from 'moment';

function AppointmentDetails({navigation, appointmentId}) {
  const {height} = Dimensions.get('screen');
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchAppointment = async() => {
    try {
      const response = await axios.get(`${APPOINTMENT_URL}/${appointmentId}`);
      if(response.data){
        setDetails(response.data);
        setLoading(false);
      }
    } catch (error) { console.log(error); setLoading(false);}
  }
  useEffect(()=>{
    fetchAppointment();
  },[]);
  
  const timeDuration = moment.duration(moment(details?.timeEnd, "HH:mm:ss").diff(moment(details?.timeStart, "HH:mm:ss")));
  return <>
    { loading && <Loader loading={loading} />}
    {
      details &&(
        <ScrollView style={{maxHeight:height,width:'100%',padding:20, position:'relative',backgroundColor:"#f4f4f5", position:'relative' }}>
          
            {
                appointmentId && <View style={{width:'auto', padding:10, display:'flex', alignItems:'center'}}>
                  <View style={{backgroundColor:"#fff", width:'auto', height:'auto',padding:10}}>
                      <QRCode
                        value={`${appointmentId}`}
                        size={200}
                        color="#fff" // QR code color
                        backgroundColor="#0e7490" // Background color,
                    />
                  </View>
                </View>
            }
            <View style={{flexGrow:1, backgroundColor:"#fff", marginTop:20, padding:15, borderRadius:20}}>
              <Text style={{fontSize:16, fontWeight:'bold'}}>Appointment Information</Text>
              <View style={{marginTop:10,flexGrow:1, rowGap:2}}>
                <Text style={{fontSize:12, }}>Dentist: Dr. <Text style={{fontWeight:"bold"}}>{details.dentist.fullname}</Text></Text>
                <Text style={{fontSize:12, }}>Appointment Date: <Text style={{fontWeight:"bold"}}>{moment(details.appointmentDate).format("dddd, MMMM D YYYY")}</Text></Text>
                <Text style={{fontSize:12, }}>Service Duration: <Text style={{fontWeight:"bold"}}>{timeDuration.asHours()>0 ? `${timeDuration.hours()} hour ${timeDuration.asMinutes()==="0" ?  ``: `and ${timeDuration.minutes()} minutes`}`:`${timeDuration.minutes()} minutes`}</Text></Text>
              </View>
            </View>
            <View style={{flexGrow:1, backgroundColor:"#fff", marginTop:20, padding:15, borderRadius:20}}>
              <Text style={{fontSize:16, fontWeight:'bold'}}>Dental Services</Text>
              {
                details.dentalServices.map((val, idx)=>(
                  <View style={{marginTop:10,flexGrow:1, rowGap:2}} key={idx}>
                    <Text style={{fontSize:14, fontWeight:"bold", flexGrow:1, alignItems:'center',justifyContent:'center' }}>{val.name} <Text style={{fontSize:10, color:"#06b6d4"}}>({val.type})</Text></Text>
                    <Text style={{fontSize:12, }}>{val.description}</Text>
                </View>
                ))
              }
            </View>
            <View style={{marginTop:50}}></View>
        </ScrollView>
      )
    }
  </>
}

export default AppointmentDetails