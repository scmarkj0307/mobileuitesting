import React from 'react'
import {styles }from '../../style/styles';
import { View, Text, Image } from 'react-native'
import Header from '../../components/Header';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import ProgressButton from '../../components/ProgressButton';

function FirstStep({navigation, details, onChangeText}) {
  return (
    <View style={styles.containerBlue}>  
       <View style={{...styles.subContainer, rowGap:15, marginTop:0,}}>
          <View style={{marginBottom:15}}>
            <Header color={"white"} />
            <Text style={{color:"#fff", fontSize:16,}} >Required information to account creation</Text>
          </View>
          <Image source={require('../../assets/images/registerlogo1.png')} style={{width:250, height:260, }} />

          <InputText onChangeText={onChangeText} value={details.firstname} name={"firstname"} placeholder={"Firstname"}  />

          <InputText onChangeText={onChangeText} value={details.middlename} name={"middlename"} placeholder={"Middlename"}  />

          <InputText onChangeText={onChangeText} value={details.lastname} name={"lastname"} placeholder={"Lastname"}  />
          
          <View style={{marginTop:0}}></View>
          <Button onPress={()=>navigation.navigate("Step 2")} title={"Next"} bgColor={"#0891b2"} textColor={"#fff"} />
       </View>
    </View>
  )
}

export default FirstStep