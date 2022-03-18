import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/homeScreen';
import Login from '../../screens/loginScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeStack" component={Home} />
      <Stack.Screen name="LoginStack" component={Login} />
    </Stack.Navigator>
  );
};

export default HomeStack;
