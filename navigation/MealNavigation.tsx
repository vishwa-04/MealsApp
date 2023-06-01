import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import CategoryScreen from '../screens/CategoryScreen';
import MealsDetailScreen from '../screens/MealsDetailScreen';
import colors from '../colors';

const Stack = createNativeStackNavigator();
function MyStack(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{animation: 'fade_from_bottom'}}>
      <Stack.Screen
        name="Screen2"
        options={{
          title: 'Category Screen',
          headerStyle: {backgroundColor: colors.primaryColor},
          headerTintColor: 'white',
        }}
        component={CategoryScreen}
      />
      <Stack.Screen
        name="Home"
        options={{
          title: 'Category Meal Screen',
        }}
        component={CategoryMealScreen}
      />
      <Stack.Screen
        name="Screen3"
        options={{title: 'Meals Detail Screen'}}
        component={MealsDetailScreen}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
