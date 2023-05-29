import React,{useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstStep from './FirstStep';
import { styles } from '../../style/styles';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FourthStep from './FourthStep';
import FifthStep from './FifthStep';
import SixthStep from './SixthStep';
import SeventhStep from './SeventhStep';

export default function Signup() {
  const [details, setDetails] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    address: "",
    birthday: new Date(),
    email: "",
    gender:"",
    contactNumber:"",
    username:"",
    password:"",
    profile: "",
  });
  const Stack = createNativeStackNavigator();

  const onChangeText = (name, value) => {
    
    setDetails({
      ...details,
      [name]: value
    });
  };
  console.log(details.contactNumber);
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='Step 1'
            options={{
                headerStyle:{...styles.containerHeaderBlue},
                headerTintColor: '#fff',
                headerTitleStyle: {...styles.headerTitle},
                headerTitle: 'Sign up'
            }}
        >
          {props=>React.cloneElement(<FirstStep />, {details, setDetails, onChangeText, ...props})}
        </Stack.Screen>
        <Stack.Screen 
            name='Step 2'
            options={{
                headerStyle:{...styles.containerHeaderBlue},
                headerTintColor: '#fff',
                headerTitleStyle: {...styles.headerTitle},
                headerTitle: 'Sign up'
            }}
        >
          {props=>React.cloneElement(<SecondStep />, {details, setDetails, onChangeText, ...props})}
        </Stack.Screen>
        <Stack.Screen 
            name='Step 3'
            options={{
                headerStyle:{...styles.containerHeaderBlue},
                headerTintColor: '#fff',
                headerTitleStyle: {...styles.headerTitle},
                headerTitle: 'Sign up'
            }}
        >
          {props=>React.cloneElement(<ThirdStep />, {details, setDetails, onChangeText, ...props})}
        </Stack.Screen>
        <Stack.Screen 
            name='Step 4'
            options={{
                headerStyle:{...styles.containerHeaderBlue},
                headerTintColor: '#fff',
                headerTitleStyle: {...styles.headerTitle},
                headerTitle: 'Sign up'
            }}
        >
          {props=>React.cloneElement(<FourthStep />, {details, setDetails, onChangeText, ...props})}
        </Stack.Screen> 
        <Stack.Screen 
            name='Step 5'
            options={{
                headerStyle:{...styles.containerHeaderBlue},
                headerTintColor: '#fff',
                headerTitleStyle: {...styles.headerTitle},
                headerTitle: 'Sign up'
            }}
        >
          {props=>React.cloneElement(<FifthStep />, {details, setDetails, onChangeText, ...props})}
        </Stack.Screen>
        <Stack.Screen 
            name='Step 6'
            options={{
                headerStyle:{...styles.containerHeaderBlue},
                headerTintColor: '#fff',
                headerTitleStyle: {...styles.headerTitle},
                headerTitle: 'Sign up'
            }}
        >
          {props=>React.cloneElement(<SixthStep />, {details, setDetails, onChangeText, ...props})}
        </Stack.Screen>
        <Stack.Screen 
            name='Step 7'
            options={{
                headerStyle:{...styles.containerHeaderBlue},
                headerTintColor: '#fff',
                headerTitleStyle: {...styles.headerTitle},
                headerTitle: 'Sign up'
            }}
        >
          {props=>React.cloneElement(<SeventhStep />, {details, setDetails, onChangeText, ...props})}
        </Stack.Screen>
    </Stack.Navigator>
  )
}
