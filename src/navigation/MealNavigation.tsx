import 'react-native-gesture-handler';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import CategoryScreen from '../screens/CategoryScreen';
import MealsDetailScreen from '../screens/MealsDetailScreen';
import colors from '../../colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import FavouriteScreen from '../screens/FavouriteScreen';
import {styles} from '../styles';
import FilterScreen from '../screens/FilterScreen';

const Drawer = createDrawerNavigator();
export const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {fontSize: 20},
      }}>
      <Drawer.Screen
        name="navtab"
        component={MyTabs}
        options={{title: 'Home'}}
      />
      <Drawer.Screen
        name="filter"
        component={FilterScreen}
        options={{
          title: 'Filter Screen',
          headerStyle: {backgroundColor: colors.primaryColor},
          headerTintColor: 'white',
          headerShown: true,
        }}
      />
    </Drawer.Navigator>
  );
};
const Stack = createNativeStackNavigator();
export const MyStack = (props: any) => {
  return (
    <Stack.Navigator screenOptions={{animation: 'fade_from_bottom'}}>
      <Stack.Screen
        name="Screen2"
        options={{
          title: 'Category Screen',
          headerStyle: {backgroundColor: colors.primaryColor},
          headerTintColor: 'white',
          // eslint-disable-next-line react/no-unstable-nested-components
          headerLeft: () => (
            <Icons
              name="menu"
              size={22}
              color="white"
              style={styles.drawer}
              onPress={() => {
                props.navigation.toggleDrawer();
              }}
            />
          ),
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
          headerRight: () => <Icon name="star" size={22} color="white" />,
        })}
        component={MealsDetailScreen}
      />
    </Stack.Navigator>
  );
};

const FavNavStack = createNativeStackNavigator();
export const MyFavNavStack = (props: any) => {
  return (
    <FavNavStack.Navigator>
      <FavNavStack.Screen
        name="Favourtie"
        component={FavouriteScreen}
        options={{
          title: 'Favourite',
          headerStyle: {backgroundColor: colors.primaryColor},
          headerTintColor: 'white',
          // eslint-disable-next-line react/no-unstable-nested-components
          headerLeft: () => (
            <Icons
              name="menu"
              size={22}
              color="white"
              style={styles.drawer}
              onPress={() => {
                props.navigation.toggleDrawer();
              }}
            />
          ),
        }}
      />
      <FavNavStack.Screen name="FavMealDetail" component={MealsDetailScreen} />
    </FavNavStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
export const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarActiveBackgroundColor: colors.primaryColor,
        tabBarInactiveTintColor: colors.primaryColor,
        tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: styles.bottomLabelTab,
        tabBarStyle: styles.bottomTab,
      }}>
      <Tab.Screen
        name="Meal"
        component={MyStack}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => {
            return <Icons name="food" size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="FavNavStack"
        component={MyFavNavStack}
        options={{
          title: 'Favourite',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => {
            return <Icon name="star" size={20} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
