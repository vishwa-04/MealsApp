/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import {NavigationContainer} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
// import {MyStack} from './src/navigation/MealNavigation';
import {MyTabs} from './src/navigation/MealNavigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default App;
