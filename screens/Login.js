import React,{useState} from 'react';
import { View, Image, StyleSheet, Text, Dimensions, text } from 'react-native';
import { styles } from '../style/styles';
import Button from '../components/Button';
import InputText from '../components/InputText';


export default function Login({navigation}) {
  const [userData, setUserData] = useState({
    username: "",
    password: ""
  });
  const [isSecure, setSecure] = useState(true);
  const onChangeText = (name, value)=>{
    setUserData({...userData, [name]: value}); console.log(userData);}
  return (
    <View style={{...styles.containerWhite}}>
        <View style={styles.subContainer}>
          <Image source={require("../assets/images/logo.jpg")}  style={{...styles.bannerImage, }}
        resizeMode="contain"/>
          <View style={{...styles.inputContainer, marginBottom:60}}>
            <InputText onChangeText={onChangeText} name='username' value={userData.username} placeholder='Username' />
            <InputText onChangeText={onChangeText} name='password' value={userData.password} placeholder='Password' isSecure={isSecure} iconName={isSecure?"eye-with-line":"eye"} iconFunction={(isSecure)=>setSecure((prev)=>{return !prev})} iconColor={"#4b5563"} />
            <Text style={{textAlign:'right',  fontSize:14, color:'#06b6d4', marginTop:5 }}>Forgot password?</Text>
          </View>
          <Button title="Login" bgColor="#06b6d4" textColor="#fff" />
          <Text style={{textAlign:'center', fontSize:14, marginTop:10 }}>Don't you have an account?{<Text style={{fontWeight:'bold', color:"#06b6d4", }} onPress={()=>navigation.navigate('Signup')}>Sign up</Text>}</Text>
        </View>
    </View>
  )
}