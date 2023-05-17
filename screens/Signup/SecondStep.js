import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Image, Pressable } from 'react-native';
import Header from '../../components/Header';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import { styles } from '../../style/styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment/moment';

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
  return (
    <View style={styles.containerBlue}>
      <View style={{ ...styles.subContainer, rowGap: 15, marginTop: 0 }}>
        {/* Header */}
        <View style={{ marginBottom: 15 }}>
          <Header color="white" />
          <Text style={{ color: "#fff", fontSize: 16 }}>Required information to account creation</Text>
        </View>

        {/* Image */}
        <Image source={require('../../assets/images/registerlogo1.png')} style={{ width: 250, height: 260 }} />

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
        <Button onPress={() => navigation.navigate("Step 2")} title="Next" bgColor="#0891b2" textColor="#fff" />
      </View>
    </View>
  );
}

export default SecondStep;
