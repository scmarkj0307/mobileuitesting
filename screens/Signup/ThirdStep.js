import React from 'react';
import { View, Text, Image, Pressable, Dimensions } from 'react-native';
import Header from '../../components/Header';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import { styles } from '../../style/styles';

function ThirdStep({navigation, details, onChangeText}) {
  const { height } = Dimensions.get("window");
  return (
    <View style={{...styles.containerBlue, alignItems:'center', justifyContent:'flex-start'}}>
    <View style={{width:'100%', display:'flex', justifyContent:'space-between', rowGap:50}}>
      {/* Header */}
      <View style={{width:'100%', }}>
        <Header color="white" value="Gender" />
        <Text style={{ color: "#fff", fontSize: 16 }}>Kindly select your gender</Text>
      </View>
    
      <View style={{ display:'flex', flexDirection:'column', rowGap:20}}>
        <Pressable style={{display:'flex', justifyContent:"center", alignItems:"center",rowGap:-10}} onPress={()=>{
            onChangeText("gender", "male");
            navigation.navigate("Step 4")
        }}>
            <Image source={require('../../assets/images/male2.png')} style={{width:200, height:200,}} />
            <Text style={{color:"#fff", fontWeight:"bold"}}>Male</Text>
        </Pressable>
        <Pressable style={{display:'flex', justifyContent:"center", alignItems:"center", rowGap:-10}} onPress={()=>{
            onChangeText("gender", "female");
            navigation.navigate("Step 4")
        }}>
        <Image source={require('../../assets/images/female2.png')} style={{width:200, height:200,}}  />
            <Text style={{color:"#fff", fontWeight:"bold"}}>Female</Text>
        </Pressable>
        
      </View>
      
      {/* Button */}
    </View>
  </View>
  )
}

export default ThirdStep