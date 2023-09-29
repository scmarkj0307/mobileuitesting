import React from 'react';
import { View, Text, Image,Dimensions,Pressable,Button } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { styles } from "../../style/styles";
import EntypoIcon from 'react-native-vector-icons/Entypo';
import DentistCard from '../../components/DentistCard';
import Modal from '../../components/TreatmentModal';
import moment from 'moment';
import { useState } from 'react';
import TextInput from "../../components/InputText";
import { createPrescription } from "../../redux/action/PrescriptionAction";
import ToastFunction from "../../config/toastConfig";
import Toast from 'react-native-toast-message';

function Prescription({setSideNavShow,navigation}) {
    const patient = useSelector((state)=>{ return state.patient.patientList; });
    const { activeDentist } = useSelector((state)=>{ return state.dentist});
    const { width, height } = Dimensions.get("screen");
    const [data, setData] = useState({
      dentist: activeDentist.dentistId,
      patientName: "",
      patient:"",
      remarks:""
    })
    const [suggestion, setSuggestion] = useState([]);
    const dispatch = useDispatch();


    const handleChange = (name, value) =>{
      if(name === "patientName"){
        const filteredPatient = patient.filter((val)=>(val.firstname+val.lastname).toLowerCase().includes(value.toLowerCase()));
        setSuggestion(filteredPatient);
      }
      setData({...data, [name]:value});
    }

    const handleSubmit = () =>{
      if(!data.patient || !data.remarks){
        ToastFunction("error", "Fill up empty field!");
      }
      dispatch(createPrescription(data));
      navigation.navigate("Dashboard");
    }

    return patient && (
      <View style={{...styles.containerGray,height:height, width:width,position:'relative',padding:20}}>
        <Toast />
        <Text style={{fontSize:18, fontWeight:'bold'}}>Add Prescription</Text>

        {/* PATIENT */}
        <View style={{marginBottom:10,marginTop:10}}>
          <Text style={{fontSize:10,fontWeight:"bold",color:"#3f3f46",marginBottom:5}}>Patient</Text>
            <TextInput
            value={data.patientName}
            name="patientName"
            onChangeText={handleChange}
            style={{fontSize:12,borderWidth:0.5,borderColor:"#e4e4e7",paddingVertical:3, paddingHorizontal:10,backgroundColor:"#fafafa",color:"#3f3f46"}}/>

           <View style={{width:"100%", height:"auto", padding:5}}>
            </View> 
            {
              suggestion.length > 0 && data.patientName ?
              suggestion.map((val, idx)=>(
                <Pressable style={{backgroundColor:"#fff",marginBottom:10,paddingVertical:10,paddingHorizontal:10,borderRadius:10}} key={idx}
                onPress={()=>{
                  setData({...data, patient:val.patientId, patientName: `${val.firstname} ${val.lastname}`});
                  setSuggestion([]);
                }}
                >
                  <Text >{val.firstname} {val.lastname}</Text>
                </Pressable>
              ))
              : !data.patientName && suggestion.length < 1 ?
              <View style={{marginBottom:10,paddingVertical:10,paddingHorizontal:10,borderRadius:10}}>
                  <Text >No existing patient</Text>
                </View>
              : <Text></Text>
            }
         </View>

         
        <View style={{marginBottom:10}}>
          <Text style={{fontSize:10,fontWeight:"bold",color:"#3f3f46",marginBottom:5}}>Description</Text>
            <TextInput
            value={data.remarks}
            name="remarks"
            onChangeText={handleChange}
            multiline={true}
            style={{fontSize:12,borderWidth:0.5,borderColor:"#e4e4e7",paddingVertical:3, paddingHorizontal:10,backgroundColor:"#fafafa",color:"#3f3f46"}}/>
        </View>
        
        <Text style={{width:"100%", backgroundColor:"#06b6d4", color:"#fff",borderRadius:10,paddingVertical:10,textAlign:'center'}} onPress={handleSubmit}>Submit</Text>

      </View>
    )
}

export default React.memo(Prescription)