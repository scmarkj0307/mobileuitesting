import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Message from './Message';
import MessageRoom from './MessageRoom';
import * as io from "socket.io-client";
import { SOCKET_LINK } from '../../../config/APIRoutes';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResponseMessage,fetchPatientMessage } from "../../../redux/action/MessageAction";

const socket = io.connect(SOCKET_LINK);
export default function index() {
    const dispatch = useDispatch();
    const Stack = createNativeStackNavigator();
    const [messageHistory, setMessageHistory] = useState(null);
    const message = useSelector((state)=>state.messages.message);
    const patient = useSelector((state)=>{return state.patient});

    useEffect(()=>{
      socket.on("received_by_patient",(data)=>{
        console.log(data);
        dispatch(fetchResponseMessage(data.key, data.value))
      })
    },[socket])
  return (
    <Stack.Navigator initialRouteName='Message Dashboard'>
        <Stack.Screen name='Message Dashboard' >
                    {props=><Message setMessageHistory={setMessageHistory} {...props}/> }
        </Stack.Screen>

        <Stack.Screen 
            name='Message Room'
            options={({ route }) => ({
            title: route.params.roomId,
            headerShown: false
            })}
        >
            {props=><MessageRoom {...props}/> }
        </Stack.Screen>
    </Stack.Navigator>
  )
}
