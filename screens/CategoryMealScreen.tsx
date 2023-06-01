import React from 'react';
import {Text, View} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import {styles} from '../styles';

function CategoryMealScreen({route}: any): JSX.Element {
  const {categoryID} = route.params;

  const selected_id = CATEGORIES.find(cat => {
    return cat.id === categoryID.toString();
  });

  return (
    <View style={styles.screen}>
      <Text>This is Category Meal Screen</Text>
      <Text>{selected_id?.title}</Text>
    </View>
  );
}

export default CategoryMealScreen;
