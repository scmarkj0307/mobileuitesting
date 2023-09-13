import React, { useState } from 'react';
import { View, Text, TextInput, Dimensions,ScrollView,Image,Pressable} from 'react-native';
import { useSelector } from 'react-redux';

function Patient({ navigation, treatmentDetails, setTreatmentDetails }) {
  const { height } = Dimensions.get("screen");
  const [search, setSearch] = useState('');
  const [suggestion, setSuggestion] = useState([]);
  const patient = useSelector(state=>state.patient.patientList);

  const handleSearchChange = (text) => {
    const filteredData = patient.filter((val)=>{
      return (val.firstname+val.middlename+val.lastname).toLowerCase().includes(text.toLowerCase());
    })
    setSuggestion(filteredData);
    setSearch(text);
  };

  console.log(treatmentDetails);
  return (
    <View style={{ width: "100%", height: height, padding: 10 }}>
      <TextInput
        style={{
          backgroundColor: "#fff",
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 10,
        }}
        value={search}
        onChangeText={handleSearchChange} // Use onChangeText instead of onChange
        placeholder="Search Patient"
      />
      
      <ScrollView style={{width:"100%", minHeight:height,marginTop:10, }} contentContainerStyle={{paddingBottom:50}}>
          {
           search && suggestion.length>0 ? (
            suggestion.map((val,idx)=>(
              <Pressable key={idx} 
              style={{backgroundColor:"#06b6d4", width:"100%", paddingVertical:10,paddingHorizontal:15, marginTop:8, display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center', columnGap:10, borderRadius:10}}
              onPress={()=>{
                setTreatmentDetails({...treatmentDetails, patientId: val.patientId});
                navigation.navigate("Services");
              }}
              >
                <Image source={{uri:val.profile}} style={{width:50, height:50, borderRadius:50}} />
                <View>
                  <Text style={{fontSize:16, color:"#fff", fontWeight:'bold'}}>{val.firstname} {val.lastname}</Text>
                  <Text style={{fontSize:12, color:"#fff"}}>Patient</Text>
                </View>
              </Pressable>
            ))
          )
          : search && suggestion<1 ? <Text style={{width:"100%", paddingHorizontal:10, fontSize:16, fontWeight:'bold', textAlign:'center',color:"#52525b"}}>No existing patient</Text>
          :<Text></Text>
          }
      </ScrollView>
    </View>
  );
}

export default React.memo(Patient);
