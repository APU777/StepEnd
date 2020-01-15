import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { HomeScreen, PatientScreen } from './screens';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Patient: {
    screen: PatientScreen,
  },
});

export default createAppContainer(AppNavigator);

// 27 : 00