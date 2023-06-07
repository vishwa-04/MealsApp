import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {MealList} from '../components/MealList';
import {Text} from 'react-native-paper';
import {View} from 'react-native';
import {styles} from '../styles';

function FavouriteScreen(props: any): JSX.Element {
  const favoMeals = useSelector((state: RootState) => state.meals.favMeals);

  if (favoMeals.length === 0 || !favoMeals) {
    return (
      <View>
        <Text style={styles.NoFavText}>No Favourite Meals Found</Text>
      </View>
    );
  } else {
    return <MealList displayMeal={favoMeals} navigation={props.navigation} />;
  }
}

export default FavouriteScreen;
