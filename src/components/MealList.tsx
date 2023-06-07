import React from 'react';
import {View, FlatList} from 'react-native';
import {styles} from '../styles';

import {MealItem} from './MealItem';

export const MealList = (props: any) => {
  const renderMealItem = (itemData: {
    item: {
      id: string;
      affordability: string;
      duration: string;
      title: string;
      complexity: string;
      ImageUrl: string;
    };
  }) => {
    return (
      <View style={styles.wholeMeal}>
        <MealItem
          title={itemData.item.title}
          duration={itemData.item.duration}
          complexity={itemData.item.complexity}
          affordability={itemData.item.affordability}
          ImageUrl={itemData.item.ImageUrl}
          onSelectMeal={() => {
            props.navigation.navigate('Screen3', {
              mealId: itemData.item.id,
              title: itemData.item.title,
            });
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={props.displayMeal}
        renderItem={renderMealItem}
        style={styles.flatlist}
      />
    </View>
  );
};
