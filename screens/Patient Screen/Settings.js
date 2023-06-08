import React from 'react';
import { View, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../components/Button';
import { useDispatch } from 'react-redux';
import {logoutPatient} from '../../redux/action/PatientVerification'

function Settings({navigation}) {
  const dispatch = useDispatch();
    const { height } = Dimensions.get("screen");
    const logoutButton = async() =>{
        await AsyncStorage.removeItem('token');
        dispatch(logoutPatient());
        navigation.navigate("Home")
      }
  return (
    <View style={{width:'100%', height:height, display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Button title={'Logout'}  bgColor='#06b6d4' textColor='#fff' onPress={logoutButton} />
    </View>
  )
}

export default Settings