import React from 'react';
import {ScrollView, Image, Text, View} from 'react-native';
import {MEALS} from '../data/dummy-data';

import {styles} from '../styles';

function MealsDetailScreen(props: any): JSX.Element {
  const {mealId} = props.route.params;
  console.log(mealId);
  const [selectedMeal] = MEALS.filter(meal => meal.id === mealId);

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
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text style={styles.mealDetailTitle}>Steps</Text>
      {selectedMeal.steps.map(step => (
        <Text key={step}>{step}</Text>
      ))}
    </ScrollView>
  );
}

export default MealsDetailScreen;
