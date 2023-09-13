import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup/index';
import Patient from './screens/Patient Screen/index';
import Dentist from './screens/Dentist Screen/index';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import Sample from './screens/Sample';
import React from 'react';
import 'react-native-gesture-handler';


function App() {
  const Stack = createNativeStackNavigator();
  return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
            <Stack.Screen name="Patient" component={Patient} options={{ headerShown: false, }} />
            <Stack.Screen name="Dentist" component={Dentist} options={{ headerShown: false, }} />
            <Stack.Screen name="Sample" component={Sample} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
}
export default App;