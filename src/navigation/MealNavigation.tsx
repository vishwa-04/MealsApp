import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import CategoryScreen from '../screens/CategoryScreen';
import MealsDetailScreen from '../screens/MealsDetailScreen';
import colors from '../../colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import FavouriteScreen from '../screens/FavouriteScreen';

const Stack = createNativeStackNavigator();
export const MyStack = () => {
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
        name="CategoryMealScreen"
        options={({route}: any) => ({
          title: route.params.title,
          headerStyle: {backgroundColor: colors.primaryColor},
          headerTintColor: 'white',
        })}
        component={CategoryMealScreen}
      />
      <Stack.Screen
        name="Screen3"
        options={({route}: any) => ({
          title: route.params.title,
          headerStyle: {backgroundColor: colors.primaryColor},
          headerTintColor: 'white',
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => (
            <Icon
              name="star"
              size={22}
              color="white"
              onPress={() => console.log('button pressed')}
            />
          ),
        })}
        component={MealsDetailScreen}
      />
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();
export const MyTabs = () => {
  return (
    <Tab.Navigator activeColor={colors.accentColor}>
      <Tab.Screen name="Meal" component={MyStack} />
      <Tab.Screen name="Favourtie" component={FavouriteScreen} />
    </Tab.Navigator>
  );
};
