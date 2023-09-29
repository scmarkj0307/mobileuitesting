import {View, Pressable, Text, ScrollView,TouchableHighlight,Dimensions,Image,Alert} from 'react-native';
import { styles } from '../../style/styles';
import Title from '../../components/Title';
import { useDispatch, useSelector } from 'react-redux';

import React,{ useEffect, useState } from 'react';
import { createPayment } from '../../redux/action/PaymentAction';

const History = ({navigation}) =>{
    const dispatch = useDispatch();
    const { height } = Dimensions.get("screen");
    const appointment = useSelector((state)=>{ return state.appointment.appointment });



    return appointment && (
       <>
         <View style={{...styles.containerGray,position:'relative'}}>
            <Title title={"History"} />
                <ScrollView style={{width:"100%",height:100, paddingHorizontal:20, }}>
                       
                </ScrollView>
        </View>
       </>
    );
}

export default React.memo(History);