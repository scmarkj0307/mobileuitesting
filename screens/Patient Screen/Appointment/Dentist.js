import React from 'react';
import { View, Text, ScrollView, Pressable, Dimensions, Image, } from 'react-native';
import { styles } from '../../../style/styles';
import { useSelector } from 'react-redux';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

function Dentist({navigation, appointmentDetails, setAppointmentDetails}) {
    const {height} = Dimensions.get("screen");
    const {dentists} = useSelector((state)=>{return state.dentist});

    const dentistSubmitButton = (value) =>{
        setAppointmentDetails({
            ...appointmentDetails,
            dentist:value
        });
        navigation.navigate('Schedule');
    }
    return (
        <ScrollView style={{maxHeight:height, padding:20, flexGrow:1, gap:10, flexDirection: 'column', position:'relative', zIndex:-50}}>
            <Text style={{ fontSize:14, textTransform:'capitalize', color:'#a1a1aa'}}>Kindly select dentist</Text>
            <View style={{flex:1, flexDirection:'column', rowGap:15, ...styles.shadow, marginTop:10}}>
                {
                    dentists.map((val,idx)=>(
                        <Pressable key={idx} style={{width:'100%', height:'auto', padding:10, backgroundColor:'#fff', flex:1, flexDirection:'row', columnGap:10, justifyContent:'flex-start', alignItems:'center', borderRadius:10}} onPress={()=>dentistSubmitButton(val.dentistId)}>
                            <Image source={{uri:val.profile}} style={{width:60, height:60, borderRadius:30,}} />
                            <View>
                                <Text style={{color:'#52525b', fontWeight:'bold'}}>Dr. {val.fullname}</Text>
                                <Text style={{color:'#0891b2', fontSize:12, }}>{val.specialty}</Text>
                            </View>
                        </Pressable>
                    ))
                }
            </View>
        </ScrollView>
    )
}

export default React.memo(Dentist);