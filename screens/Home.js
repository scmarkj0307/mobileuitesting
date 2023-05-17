import React,{ useEffect,Component } from 'react';
import axios from 'axios';
import { View, StyleSheet, Text, Image, Tex  } from 'react-native';
import Button from '../components/Button';
import { styles } from '../style/styles';

export default function Home({navigation}) {

    const fetchData = async()=>{
        try {
            const response = await axios.get("http://192.168.254.198:8080/api/v1/admin/hello");
            const data = response?.data;
            console.log(data);
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        fetchData();
    },[]);

    const design = StyleSheet.create({
      subHeader:{
        gap:10,
        maxWidth:400,
        minHeight:'auto'
      }
      
    })
  return (
    <View style={styles.containerBlue}>
      <Image source={require('../assets/images/logo2.jpg')} style={{ width:250, height:250, borderRadius: 300 }}/>
      <View style={design.subHeader}>
        <Text style={{...styles.header2,textAlign:'center'}}>Let's get started</Text>
        <Text style={{...styles.paragraph, textAlign:'center'}}>Login to enjoy the features we've provided, and stay healthy.</Text>
        <View style={{ paddingTop:20, paddingBottom:10, display:'flex', flexDirection:'column', rowGap:15 }}>
          <Button title='Login' onPress={()=>navigation.navigate('Login')} bgColor='#fff' textColor='rgb(6, 182, 212)' haveBorder={false} />
          <Button title='Signup' onPress={()=>navigation.navigate('Signup')} bgColor='rgb(6, 182, 212)' textColor='#fff' haveBorder={true} />
        </View>
      </View>
    </View>
  )
}
