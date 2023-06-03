import React from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  ImageBackground,
} from 'react-native';
import {styles} from '../styles';
export const MealItem = (itemData: any) => {
  return (
    <View style={styles.mealItem}>
      <TouchableNativeFeedback onPress={itemData.onSelectMeal}>
        <View>
          <View style={{...styles.itemRow, ...styles.mealheader}}>
            <ImageBackground
              source={{uri: itemData.ImageUrl}}
              style={styles.bgstyle}>
              <Text style={styles.mealtitle}>{itemData.title}</Text>
            </ImageBackground>
          </View>
          <View style={{...styles.itemRow, ...styles.mealDetail}}>
            <Text style={styles.mealsDetailsText}>{itemData.duration}m</Text>
            <Text style={styles.mealsDetailsText}>
              {itemData.complexity.toUpperCase()}
            </Text>
            <Text style={styles.mealsDetailsText}>
              {itemData.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};
