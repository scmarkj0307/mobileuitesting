import React from 'react';
import { View, Text } from 'react-native'; 
import AntIcon from 'react-native-vector-icons/AntDesign';

export default function ProgressButton({step}) {
  const pages = [
        {
            value: 1,
            color: "",
        },
        {
            value: 2,
            color: "",
        },
        {
            value: 3,
            color: "",
        },
        {
            value: 4,
            color: "",
        },
        {
            value: 5,
            color: "",
        },
        {
            value: 6,
            color: "",
        },
    ]
  return (
    <View style={{ display:'flex', flexGrow:1, flexDirection:'row', justifyContent:'space-between', columnGap:20, marginTop:40, marginBottom:20, position:'relative' }}>
       {
        pages
        .map((val, index) => {
          if (index < step) {
            return { ...val, color: "white" };
          }
          return val;
        })
        .map((val, index) => (
          <View key={index} style={{width:'auto', display:'flex', justifyContent:'center', alignItems:'center'}}>
            {
              index < step ?(
                <Text style={{color:'white'}}>Step {index+1}</Text>
              ):<Text></Text>

            }
            <View style={{padding:3, borderRadius:20}} >
            <View key={index} style={{width: 20, height: 20, borderRadius: 20, backgroundColor: '#0891b2', display:'flex', justifyContent:'center', alignItems:'center' }}>
              {
                index<(step-1)&& (
                  <AntIcon name='checkcircle' size={20} color={"#ecfeff"} />
                )
              }
            </View>
          </View>
          </View>
        ))
    }
    </View>
  )
}
