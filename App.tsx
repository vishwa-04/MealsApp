/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {
  MyDrawer,
  // MyTabs,
} from './src/navigation/MealNavigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MyDrawer />
      {/* <MyTabs /> */}
    </NavigationContainer>
  );
}

export default App;
