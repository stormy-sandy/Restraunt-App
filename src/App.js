import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './screens/home';

const App = (prps) => {
  const AppNavigator = createStackNavigator(
    {
      Home: HomeScreen,
    },
    {
      initialRouteName: 'Home',
    },
  );

  const Navigator = createAppContainer(AppNavigator);

  return <Navigator />;
};

export default App;
