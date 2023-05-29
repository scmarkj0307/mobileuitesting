import React, { useState, useRef } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import Header from '../../components/Header';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import { styles } from '../../style/styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment/moment';
import axios from 'axios';
import { PATIENT_URL } from '../../config/APIRoutes';
import ToastFunction from '../../config/toastConfig';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

function SecondStep({ navigation, details, setDetails, onChangeText }) {
  const [showPicker, setShowPicker] = useState(false);
  const birthday = useRef("");

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };

  const onChangeDate = ({type}, selectedDate) =>{
    if(type=="set"){
      const currentDate = selectedDate;
      setDetails({
        ...details,
        ["birthday"]:currentDate
      })
      birthday.current=`${moment(currentDate).format("LL")}`;

      if (Platform.OS === "android"){
        toggleDatepicker();
        setDetails({
          ...details,
          ["birthday"]:currentDate
        })
        birthday.current=`${moment(currentDate).format("LL")}`;
      }
    } 
    else{
      toggleDatepicker();
    }
  }

  const checkIfEmailExist = async()=>{
    try {
      const response = await axios.post(`${PATIENT_URL}/checkEmail/${details.email}`);
      if(response.data){
        navigation.navigate("Step 3")
      }
    } catch (error) {
      ToastFunction("error", error.response.data.message);
    }
  }
  const onSubmitButton = () =>{
    if(!details.address || !details.birthday || !details.email) return ToastFunction("error", "Fill empty field!");
    checkIfEmailExist();
  }
  return (
    <View style={styles.containerBlue}>
      <Toast />
      <View style={{ ...styles.subContainer, rowGap: 15, marginTop: 0 }}>
        {/* Header */}
        <View style={{ marginBottom: 15 }}>
          <Header color="white" />
          <Text style={{ color: "#fff", fontSize: 16 }}>Required information to account creation</Text>
        </View>

        {/* Image */}
        <Image source={require('../../assets/images/rg1.png')} style={{ width: 250, height: 260 }} />

        {/* Input fields */}
        <InputText onChangeText={onChangeText} value={details.address} name="address" placeholder="Address" />

          {
            showPicker&&(
              <DateTimePicker 
                mode="date"
                display='spinner'
                value={details.birthday}
                onChange={onChangeDate}
              />
            )
          }
          {
            !showPicker&&(
              <Pressable
              style={{width:'100%'}}
              onPress={toggleDatepicker}
            >
              <InputText onChangeText={onChangeText}  value={birthday.current} placeholder={"Birthday"} isEditable={false} />
            </Pressable>
            )
          }

        <InputText onChangeText={onChangeText} value={details.email} name="email" placeholder="Email" />

        {/* Button */}
        <View style={{ marginTop: 0 }}></View>
        <Button onPress={onSubmitButton} title="Next" bgColor="#0891b2" textColor="#fff" />
      </View>
    </View>
  );
}

export default SecondStep;
