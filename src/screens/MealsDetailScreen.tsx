import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback, useEffect} from 'react';
import {Vibration} from 'react-native';
import {ScrollView, Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import {MEALS} from '../data/dummy-data';
import {useSelector, useDispatch} from 'react-redux';
import {mealReducer} from '../redux/slice';
import {RootState} from '../redux/store';
import {styles} from '../styles';
import {RootStackParamList} from '../types/navigationTypes';

function MealsDetailScreen(
  props: NativeStackScreenProps<RootStackParamList>,
): JSX.Element {
  const togFav = props.route.params?.toggleFav;
  const isFav = props.route.params?.isFav;
  // console.log(togFav);

  props.navigation.setOptions({
    // eslint-disable-next-line react/no-unstable-nested-components
    headerRight: () => (
      <Icon
        name={isFav ? 'star' : 'star-o'}
        size={22}
        color="white"
        onPress={() => {
          togFav();
          Vibration.vibrate();
        }}
      />
    ),
  });

  const {mealId} = props.route.params;
  const currentMealIsFav = useSelector((state: RootState) =>
    state.meals.favMeals.some(meal => meal.id === mealId),
  );
  const dispatch = useDispatch();

  const toggleFavHandler = useCallback(() => {
    dispatch(mealReducer(mealId));
    // console.log(mealId);
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({isFav: currentMealIsFav});
  }, [currentMealIsFav, props.navigation]);

  useEffect(() => {
    props.navigation.setParams({toggleFav: toggleFavHandler});
  }, [props.navigation, toggleFavHandler]);

  const mealInDetail = useSelector((state: RootState) => state.meals.meals);
  const [selectedMeal] = mealInDetail.filter(meal => meal.id === mealId);

  return (
    <ScrollView>
      <Image
        source={{uri: selectedMeal.ImageUrl}}
        style={styles.mealDetailImage}
      />
      <View style={{...styles.itemRow, ...styles.mealDetail}}>
        <Text style={styles.mealsDetailsText}>{selectedMeal.duration}m</Text>
        <Text style={styles.mealsDetailsText}>{selectedMeal.complexity}</Text>
        <Text style={styles.mealsDetailsText}>
          {selectedMeal.affordability}
        </Text>
      </View>
      <Text style={styles.mealDetailTitle}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <Text style={styles.mealDetailPoints} key={ingredient}>
          {ingredient}
        </Text>
      ))}
      <Text style={styles.mealDetailTitle}>Steps</Text>
      {selectedMeal.steps.map(step => (
        <Text style={styles.mealDetailPoints} key={step}>
          {step}
        </Text>
      ))}
    </ScrollView>
  );
}

export default MealsDetailScreen;
