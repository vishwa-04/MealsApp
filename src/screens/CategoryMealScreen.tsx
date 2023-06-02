import React from 'react';
import {FlatList, View} from 'react-native';
import {MealItem} from '../components/MealItem';
import {MEALS} from '../data/dummy-data';
import {styles} from '../styles';

function CategoryMealScreen({route}: any): JSX.Element {
  const {categoryID} = route.params;
  const displayMeal = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryID) >= 0,
  );

  const renderMealItem = (itemData: {
    item: {
      duration: string;
      title: string;
      complexity: string;
    };
  }) => {``
    return (
      <View style={styles.wholeMeal}>
        <MealItem
          title={itemData.item.title}
          duration={itemData.item.duration}
          complexity={itemData.item.complexity}
        />
      </View>
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayMeal}
        renderItem={renderMealItem}
        style={styles.flatlist}
      />
    </View>
  );
}

export default CategoryMealScreen;
