import React, {useState} from 'react';
import {styles }from '../../style/styles';
import { View, Text, Pressable, Image } from 'react-native'
import Header from '../../components/Header';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import ToastFunction from '../../config/toastConfig';
import Toast from 'react-native-toast-message';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { PATIENT_URL } from '../../config/APIRoutes';

function SixthStep({navigation, details, setDetails, onChangeText}) {
  const [profile, setProfile] = useState("");
  const handleImageUpload = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (result.canceled) {
      return ToastFunction("error", "Kindly select an image");
    }
  
    const selectedAsset = result.assets[0];
    const base64Image = await convertAssetToBase64(selectedAsset);
    setProfile(base64Image);
  };
  
  const convertAssetToBase64 = async (asset) => {
    const response = await fetch(asset.uri);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };
  
  const btnSubmitHandler = () =>{
    if(!profile)return ToastFunction("error", "Select image profile")
    setDetails({...details, profile: profile});
    navigation.navigate("Step 7");
  }
  return (
    <View style={styles.containerBlue}>  
    <Toast />
    <View style={{ ...styles.subContainer, rowGap: 15, marginTop: 0 }}>
  <View style={{ marginBottom: 15 }}>
    <Header color={"white"} />
    <Text style={{ color: "#fff", fontSize: 16 }}>Required information to account creation</Text>
  </View>
  
  <View style={{width:300, height:300, backgroundColor:"#fff", borderRadius:500}}>
    {profile&&(<Image source={{uri: profile}} style={{ width: '100%', height: '100%', borderRadius:500 }} />)}
  </View>
  <Text onPress={handleImageUpload} style={{color:"#fff"}}>Set Profile</Text>

  <View style={{ marginTop: 0 }}></View>
  <Button onPress={btnSubmitHandler} title={"Next"} bgColor={"#0891b2"} textColor={"#fff"} />
</View>

    </View>
  )
}

export default SixthStep