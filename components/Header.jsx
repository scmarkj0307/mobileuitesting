import React,{Component} from 'react';
import { Text } from 'react-native';

export default function Header({ color, value}) {
  return (
    <Text style={{ 
        color: `${color === "white" ? "#fff" : "#06b6d4"}`,
        fontSize: 32,
        fontWeight:'800',
        textTransform:"capitalize",
    }}>{value?value:"Register"}</Text>
  )
}
