import { useState,useEffect } from 'react';
import {styles }from '../../style/styles';
import { View, Text, Image, TextInput } from 'react-native'
import Header from '../../components/Header';
import Button from '../../components/Button';
import axios from 'axios';
import { PATIENT_URL, SMS_URL } from '../../config/APIRoutes';
import ToastFunction from '../../config/toastConfig';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

function SeventhStep({navigation, details, onChangeText}) {
  const [OTPcode, setOTPCode] = useState("");
  const [pin, setPin] = useState(getRandomNumber());
  const [timer, setTimer] = useState(60); // Initial timer value in seconds
  const [isTimerRunning, setIsTimerRunning] = useState(false);


  useEffect(()=>{
    if(!isTimerRunning){
      sendSmsMessage();
      setIsTimerRunning(!isTimerRunning);
    }
    if (isTimerRunning) {
      const countdown = setTimeout(() => {
        if (timer > 0) {
          setTimer((prevTimer) => prevTimer - 1);
        }
      }, 1000);
      if(timer === 0) return setPin(" ");
      return () => clearTimeout(countdown);
      
    }
    
  },[isTimerRunning,timer])
 
console.log('pin: ', pin);
  const sendSmsMessage = async() =>{
    try {
      const message = `Hello, Your verification PIN is: ${pin}. Please enter this 4-digit PIN to proceed with your application. If you didn't request this PIN, please disregard this message. Thank you!`;
      const data = {
        destinationSMSNumber: details.contactNumber.replace(0,"+63"),
        smsMessage: message,
      }
      await axios.post(`${SMS_URL}/processSMS`,data);
    } catch (error) {
      console.log(error);
    }
  }

  const registerPatient = async() =>{
    try {
      const response = await axios.post(`${PATIENT_URL}/registration`,details);
      if(response.data){
        ToastFunction("success", response.data.message);
        navigation.navigate('Login');
        setTimer(0);
      }
    } catch (error) {
      ToastFunction("error", error.response.data.message);
    }
  }
  const sendMessageButton = ()=>{
    if(!OTPcode) return ToastFunction("error", "Fill-up empty field!");
    if(OTPcode.length < 4 || OTPcode.toString() !== pin.toString())return ToastFunction("error", "Invalid OTP code");
    return registerPatient();
  }
  const resendOTPCode = () =>{
    setTimer(60); 
    setIsTimerRunning(false);
    setPin(getRandomNumber());
  }
  function getRandomNumber() {
    return Math.floor(Math.random() * 9000) + 1000;
  }
  return (
    <View style={styles.containerBlue}>  
    <Toast />
    <View style={{...styles.subContainer, rowGap:15, marginTop:0,}}>
       <View style={{marginBottom:15}}>
         <Header color={"white"} />
         <Text style={{color:"#fff", fontSize:16,}} >Required information to account creation</Text>
       </View>
       <Image source={require('../../assets/images/rg1.png')} style={{width:250, height:260, }} />

      <TextInput style={{width:"100%", padding:10,backgroundColor:"#fff", borderRadius:10, textAlign:'center', fontSize:20}} value={OTPcode} placeholder='4-digit Pin' maxLength={4} keyboardType='phone-pad' onChangeText={(text)=>
        setOTPCode(text)
      }></TextInput>
       
       {
        timer > 0 ?
        <Text style={{color:"#fff",}}>Resend code in {timer} sec</Text>
        :<Text style={{textDecorationLine:'underline',color:"#fff",}} onPress={resendOTPCode}>Resend code</Text>
       }
       <View style={{marginTop:0}}></View>
       <Button onPress={sendMessageButton} title={"Next"} bgColor={"#0891b2"} textColor={"#fff"} />
    </View>
 </View>
  )
}

export default SeventhStep