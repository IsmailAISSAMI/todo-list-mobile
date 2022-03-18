import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../../screens/homeScreen';
import LoginStack from '../../screens/loginScreen';

const BottomTab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="HomeStack" component={HomeStack} />
        <BottomTab.Screen name="LoginStack" component={LoginStack} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
