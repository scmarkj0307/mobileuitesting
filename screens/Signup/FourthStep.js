import React, { useState } from 'react'
import {styles }from '../../style/styles';
import { View, Text, Image, Dimensions } from 'react-native'
import Header from '../../components/Header';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import Toast from 'react-native-toast-message';
import ToastFunction from '../../config/toastConfig';
import axios from 'axios';
import { PATIENT_URL } from '../../config/APIRoutes';

function FourthStep({navigation, details, onChangeText}) {
  const { height } = Dimensions.get("window");
  const checkPhoneNumberExist = async() =>{
    try {
      const response = await axios.post(`${PATIENT_URL}/checkContactNumber/${details.contactNumber}`)
      if(response.data){
        navigation.navigate("Step 5");
      }
    } catch (error) {
      // ToastFunction("error", error.response.data.message);
      console.log( error);
    }
  }
  const submitButton = () =>{
    if(!details.contactNumber)return ToastFunction("error", "Fill up empty field")
    if(!details.contactNumber.match(/^09\d{9}$/)) return ToastFunction("error", "Number must start at 09 and must contain 11 digit");
    checkPhoneNumberExist();
  }
  return (
    <View style={styles.containerBlue}>  
    <Toast />
       <View style={{...styles.subContainer, rowGap:15, marginTop:0}}>
          <View style={{marginBottom:15}}>
            <Header color={"white"} />
            <Text style={{color:"#fff", fontSize:16,}} >Required information to account creation</Text>
          </View>
          <Image source={require('../../assets/images/rg1.png')} style={{width:250, height:260, }} />

          <InputText onChangeText={onChangeText} value={details.contactNumber} name={"contactNumber"} placeholder={"Phone Number"} keyboardType={"phone-pad"} />
          
          <View style={{marginTop:0}}></View>
          <Button onPress={submitButton} title={"Next"} bgColor={"#0891b2"} textColor={"#fff"} />
       </View>
    </View>
  )
}

export default FourthStep