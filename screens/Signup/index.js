import React,{useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstStep from './FirstStep';
import { styles } from '../../style/styles';
import SecondStep from './SecondStep';

export default function Signup() {
  const [details, setDetails] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    address: "",
    birthday: new Date(),
    email: "",
  });
  const Stack = createNativeStackNavigator();

  const onChangeText = (name, value) => {
    
    setDetails({
      ...details,
      [name]: value
    });
  };
  console.log(details);
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
    </Stack.Navigator>
  )
}
