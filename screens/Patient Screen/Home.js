import React,{ useEffect } from 'react';
import { View, Dimensions,Text,BackHandler,ToastAndroid, Button, ImageBackground, Image, StyleSheet } from 'react-native';
import { styles } from '../../style/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IonicsIcon from 'react-native-vector-icons/Ionicons';

function Home({navigation, patient}) {
    const {height, width} = Dimensions.get("screen");
    useEffect(() => {
      const disableBackButton = () => {
        ToastAndroid.show('Back button is disabled', ToastAndroid.SHORT);
        return true; 
      };
      const backHandler = BackHandler.addEventListener('hardwareBackPress', disableBackButton);
      return () => { backHandler.remove(); };
    }, []);
    return patient && (
      <View style={{...styles.containerGray, height:height, justifyContent:'flex-start', alignItems:'flex-start'}}>
          {/* <View style={{position: 'absolute', top: 0,zIndex: 50, width: width, height: height / 9, borderBottomRightRadius: 100,overflow: 'hidden',}}>
            <ImageBackground source={require('../../assets/images/morning.png')} style={{flex: 1,resizeMode: 'cover',}}>
              <Text>Hello</Text>
            </ImageBackground>
            <View style={{...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0, 0, 0, 0.4)'}}></View>
          </View> */}
          
          <View style={{width:'100%', height:height/2, }}>
            <ImageBackground source={require('../../assets/images/bg-morning.jpg')} style={{flex: 1,resizeMode: 'cover',}}></ImageBackground>
            <View style={{...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(14,116,144,0.6)', flex:1, justifyContent:'center', alignItems:'center', flexDirection:'column', rowGap:8}}>
              <Image source={{uri:patient.profile}} style={{width:80, height:80, borderRadius:100}}/>
              <Text style={{color:'#bae6fd', fontSize:14}}>Good Morning</Text>
              <Text style={{color:'#fff', fontSize:18, letterSpacing:2, fontWeight:'bold'}}>{patient.firstname}</Text>
              {/* <Button title='Logout' onPress={logoutButton}>Logout</Button> */}
            </View>
            
          </View>
          
          <View style={{backgroundColor:'#f5f5f5', width:'100%', height:(height/2.3), borderTopLeftRadius:30, borderTopRightRadius:30, position:'absolute', bottom:0, overflow:'hidden', padding:20, zIndex:50}}>
            <View style={{display:'flex', flexDirection:'column', gap:10,}}>
              <Text style={{fontSize:18, fontWeight:'bold', color:'#3f3f46'}}>Today's Appointment</Text>
              <View style={{backgroundColor:'#06b6d4', width:'100%', padding:15, borderRadius:5, borderLeftColor:'#082f49', borderLeftWidth:2}}>
                <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}>No Appointment</Text>
              </View>
            </View>
            
          </View>
        



          {/* <View style={{width:'100%', height:height/2.5, backgroundColor:'#06b6d4', display:'flex', justifyContent:'center', alignItems:'center', gap:15}}>
            <Image source={{uri:patient.profile}} style={{width:120, height:120, borderRadius:300}} />
            <View>
            <Text style={{color:'#fff', fontSize:20, fontWeight:'bold'}}>Hello, {patient.firstname}</Text>
            </View>
            <Button title='Logout' onPress={logoutButton} />
          </View> */}
      </View>
    )
}

export default Home