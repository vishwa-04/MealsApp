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
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyDrawer />
        {/* <MyTabs /> */}
      </NavigationContainer>
    </Provider>
  );
}

export default App;
