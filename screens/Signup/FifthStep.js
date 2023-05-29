import React, {useState} from 'react';
import {styles }from '../../style/styles';
import { View, Text, Image } from 'react-native'
import Header from '../../components/Header';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import ToastFunction from '../../config/toastConfig';
import Toast from 'react-native-toast-message';

function FifthStep({navigation, details, setDetails, onChangeText}) {
  const [isSecure, setSecure] = useState({
    isPassword: true,
    isConfirmPassword:true
  });
  const[passwordDetails, setPasswordDetails] = useState({
    password: "",
    confirmPassword: ""
  })
  const onChangePaswordDetails = (name, value) =>{
    setPasswordDetails({...passwordDetails, [name]:value})
  }
  const passwordOnChangeHandler = (type) =>{
    if(type==="password") return setSecure({...isSecure, isPassword:!isSecure.isPassword });
    return setSecure({...isSecure, isConfirmPassword:!isSecure.isConfirmPassword });
  }
  const submitDetails = () =>{
    if(!details.username || !passwordDetails.password || !passwordDetails.confirmPassword) return ToastFunction("error", "Fill up empty field");
    if(passwordDetails.password!==passwordDetails.confirmPassword) return ToastFunction("error", "Mismatch password and confirm password");
    setDetails({...details, password: passwordDetails.password});
    return navigation.navigate("Step 6")
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

          <InputText onChangeText={onChangeText} value={details.username} name={"username"} placeholder={"Username"}  />

          <InputText onChangeText={onChangePaswordDetails} value={passwordDetails.password} name={"password"} placeholder={"Password"} isSecure={isSecure.isPassword} iconName={isSecure.isPassword?"eye-with-line":"eye"} iconFunction={()=>passwordOnChangeHandler("password")} iconColor={"#4b5563"} />

          <InputText onChangeText={onChangePaswordDetails} value={passwordDetails.confirmPassword} name={"confirmPassword"} placeholder={"Confirm Password"} isSecure={isSecure.isConfirmPassword} iconName={isSecure.isConfirmPassword ?"eye-with-line":"eye"} iconFunction={()=>passwordOnChangeHandler("confirmPassword")} iconColor={"#4b5563"} />

          
          <View style={{marginTop:0}}></View>
          <Button onPress={submitDetails} title={"Next"} bgColor={"#0891b2"} textColor={"#fff"} />
       </View>
    </View>
  )
}

export default FifthStep