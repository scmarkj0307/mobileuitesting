import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../style/styles';

function Title({title}) {
    return (
        <>
            <View style={{width:"100%",height:30,backgroundColor:"#155e75"}}></View>
            <View style={{width:"100%",height:55, backgroundColor:"#0891b2", borderBottomLeftRadius:50, borderBottomRightRadius:50,display:'flex',justifyContent:'center',alignItems:'center' ,...styles.shadow}}>
                <Text style={{fontSize:18, color:"#fff",fontWeight:"bold"}}>{title}</Text>
            </View>
        </>
    );
}

export default Title;