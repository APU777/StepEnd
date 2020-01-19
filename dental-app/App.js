import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { HomeScreen, PatientScreen } from './screens';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Patient: {
      screen: PatientScreen,
    }
  },
  {
   InitialRouteName: 'Patient'
  }
);

export default createAppContainer(AppNavigator);

