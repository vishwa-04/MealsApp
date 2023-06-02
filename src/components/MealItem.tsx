import React from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
import {styles} from '../styles';
export const MealItem = (itemData: {
  title:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <View style={styles.mealItem}>
      <TouchableNativeFeedback>
        <View>
          <View style={{...styles.itemRow, ...styles.mealheader}}>
            <Text>{itemData.title}</Text>
          </View>
          <View style={{...styles.itemRow, ...styles.mealDetail}}>
            <Text>{itemData.duration}m</Text>
            <Text>{itemData.complexity}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};
