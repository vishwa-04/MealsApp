import 'react-native-gesture-handler';
import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerScreenProps,
} from '@react-navigation/drawer';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import CategoryScreen from '../screens/CategoryScreen';
import MealsDetailScreen from '../screens/MealsDetailScreen';
import colors from '../../colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import FavouriteScreen from '../screens/FavouriteScreen';
import {styles} from '../styles';
import FilterScreen from '../screens/FilterScreen';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {
  RootDrawerParamList,
  RootFavStackParamList,
  RootStackParamList,
} from '../types/navigationTypes';
import {CompositeScreenProps} from '@react-navigation/native';

const Drawer = createDrawerNavigator<RootDrawerParamList>();
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
        options={({route}: DrawerScreenProps<RootDrawerParamList>) => ({
          title: 'Filter Screen',
          headerStyle: {backgroundColor: colors.primaryColor},
          headerTintColor: 'white',
          headerShown: true,
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => (
            <TouchableNativeFeedback style={styles.saveTouch}>
              <Icon
                name="save"
                size={22}
                color="white"
                style={styles.drawer}
                onPress={route.params?.save}
              />
            </TouchableNativeFeedback>
          ),
        })}
      />
    </Drawer.Navigator>
  );
};
const Stack = createNativeStackNavigator<RootStackParamList>();
export const MyStack = (props: NativeStackScreenProps<RootStackParamList>) => {
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
        options={({
          route,
        }: NativeStackScreenProps<
          RootStackParamList,
          'CategoryMealScreen'
        >) => ({
          title: route.params?.title,
          headerStyle: {backgroundColor: colors.primaryColor},
          headerTintColor: 'white',
        })}
        component={CategoryMealScreen}
      />
      <Stack.Screen
        name="Screen3"
        options={({
          route,
        }: NativeStackScreenProps<RootStackParamList, 'Screen3'>) => ({
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

const FavNavStack = createNativeStackNavigator<RootFavStackParamList>();
export const MyFavNavStack = (
  props: CompositeScreenProps<
    NativeStackScreenProps<RootFavStackParamList>,
    DrawerScreenProps<RootDrawerParamList>
  >,
) => {
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
      <FavNavStack.Screen
        name="Screen3"
        component={MealsDetailScreen}
        options={({
          route,
        }: NativeStackScreenProps<RootFavStackParamList, 'Screen3'>) => ({
          title: route.params.title,
          headerStyle: {backgroundColor: colors.primaryColor},
          headerTintColor: 'white',
        })}
      />
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
