import React, { useEffect, useState } from 'react'
import {View, Text, Button} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPatient, decrement } from '../redux/action/PatientAction';

const Sample = () =>{
    const {loading, patient} = useSelector((state) => state.patientReducer);
    const dispatch = useDispatch();
  
    useEffect(()=>{
        dispatch(fetchPatient());
    },[dispatch])
    return (
        <>
        {loading && (<Text>Loading...</Text>)}
        {
            patient&&(
                <View>
                {/* <Text>Count: {loading}</Text> */}
                {
                    patient.map((val)=>(
                        <Text key={val.patientId}>{val.firstname}</Text>
                    ))
                }
                <Button title="Submit" />
            </View>
            )
        }
        </>
    );
}

export default Sample;