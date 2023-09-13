import React, { useState } from 'react';
import { View, Text, TextInput, Dimensions,ScrollView,Image,Pressable,ImageBackground} from 'react-native';
import { useSelector } from 'react-redux';


function Teeth ({navigation, treatmentDetails, setTreatmentDetails}){
    const { height } = Dimensions.get("screen");
    const [toothChart, setToothChart] = useState(
        [...Array(32)].map((_, idx) => ({
          name: `${idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`}`,
          value: idx + 1,
          isClick: false,
        }))
      );
      const [selectedTooth, setSelectedTooth] = useState([]);

      
      const handleToothClick = (index) => {
        const updatedToothChart = [...toothChart];
        updatedToothChart[index].isClick = !updatedToothChart[index].isClick;
        if(updatedToothChart[index].isClick){
            setSelectedTooth([...selectedTooth, index+1]);
        }else{
            const update = selectedTooth.filter((val)=>val!==index+1);
            setSelectedTooth(update)
        }
        
        
        setToothChart(updatedToothChart);
      };

      const submitButton = () =>{
        if(selectedTooth.length>0){
            setTreatmentDetails({...treatmentDetails, toothList:selectedTooth});
        }
        console.log(treatmentDetails);
      }

    return(
        <ScrollView style={{paddingHorizontal:10}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Select patient tooth</Text>
            <View style={{width:"100%", height:"auto",display:'flex', flexDirection:"row", flexWrap:'wrap',gap:10, justifyContent:'space-evenly',alignItems:'center' }}>
                {/* UPPER Teeth */}
                {
                    toothChart.map((val,idx)=>(
                        <Text key={idx} 
                        style={{
                            padding:10,
                            fontSize:18,
                            backgroundColor:val.isClick ?"#06b6d4" : "#fff",
                            color:val.isClick?"#fff":"#52525b",
                            borderRadius:10,
                        }}
                        onPress={()=>handleToothClick(idx)}
                        >{val.name}</Text>
                    ))
                }
            </View>

            <Text 
            style={{backgroundColor:"#06b6d4",color:"#fff", width:"100%", paddingVertical:10,marginVertical:10,textAlign:'center',fontWeight:'bold'}}
            onPress={submitButton}
            >
                {selectedTooth.length>0 ? "Continue":"None"}
            </Text>

        </ScrollView>
    )
}

export default React.memo(Teeth);