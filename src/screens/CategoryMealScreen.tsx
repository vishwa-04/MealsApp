import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {MealList} from '../components/MealList';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigationTypes';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {styles} from '../styles';

function CategoryMealScreen({
  route,
  navigation,
}: NativeStackScreenProps<
  RootStackParamList,
  'CategoryMealScreen'
>): JSX.Element {
  const {categoryID} = route.params;
  const availableMeals = useSelector(
    (state: RootState) => state.meals.filteredMeals,
  );
  const displayMeal = availableMeals.filter(
    meal => meal.categoryIds.indexOf(categoryID) >= 0,
  );
  if (displayMeal.length === 0 || !displayMeal) {
    return (
      <View>
        <Text style={styles.NoFavText}>
          No Meals Found..Maybe Check Your Filters
        </Text>
      </View>
    );
  }
  return <MealList displayMeal={displayMeal} navigation={navigation} />;
}

export default CategoryMealScreen;
