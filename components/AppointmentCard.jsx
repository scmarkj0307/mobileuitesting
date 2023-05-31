import React from 'react';
import { View, Image, TouchableHighlight, Text } from 'react-native';
import moment from 'moment/moment';

function AppointmentCard({title, dataList, bgColor, subColor, fontColor, showDate, viewEvent}) {
  return (
    <View style={{display:'flex', flexDirection:'column', gap:6, marginBottom:20}}>
              <Text style={{fontSize:18, fontWeight:'bold', color:'#3f3f46'}}>{title}</Text>
              {
               dataList && dataList.length >0 ? (
                  <>
                    {
                      dataList.map((val, idx)=>(
                        <View style={{backgroundColor:bgColor, width:'100%', paddingVertical:8,paddingHorizontal:10, borderRadius:10, borderLeftColor:subColor, borderLeftWidth:2, display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', columnGap:1}} key={idx}>
                          <Image source={{uri:val.dentist.profile}} style={{width:50, height:50,borderRadius:10}}/>
                          <View style={{flex:1, padding:8, rowGap:1}}>
                            <Text style={{fontWeight:'bold', fontSize:14, color:'#27272a'}}>Dr. {val.dentist.fullname}</Text>
                            {showDate && <Text style={{fontSize:11, color:'#27272a'}}>{moment(val.appointmentDate).format('dddd, MMMM D YYYY')}</Text>}
                            <Text style={{fontSize:10, color:fontColor}}>{moment(val.timeStart, 'HH:mm:ss').format('h:mm A')} - {moment(val.timeEnd, 'HH:mm:ss').format('h:mm: A')}</Text>
                            
                          </View>
                          <TouchableHighlight style={{backgroundColor:subColor, paddingHorizontal:10, paddingVertical:5, borderRadius:5}} onPress={()=>viewEvent(val.appointmentId)} ><Text style={{color:'#fff', fontSize:12}}>View</Text></TouchableHighlight>
                        </View>
                      ))
                    } 
                  </>
                ) :<View style={{backgroundColor:'#06b6d4', width:'100%', padding:15, borderRadius:5, borderLeftColor:'#082f49', borderLeftWidth:2}}>
                <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>No Appointment</Text>
              </View>
              }
              {/* 
              NO APPOINTMENT
              <View style={{backgroundColor:'#06b6d4', width:'100%', padding:15, borderRadius:5, borderLeftColor:'#082f49', borderLeftWidth:2}}>
                <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>No Appointment</Text>
              </View> */}
            </View>
  )
}

export default AppointmentCard