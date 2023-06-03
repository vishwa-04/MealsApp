import React from 'react';
import {FlatList, Text, TouchableNativeFeedback, View} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import {styles} from '../styles';

function CategoryScreen({navigation}: any): JSX.Element {
  const renderGridItem = (itemData: any) => {
    return (
      <TouchableNativeFeedback
        onPress={() =>
          navigation.navigate('CategoryMealScreen', {
            categoryID: itemData.item.id,
            title: itemData.item.title,
          })
        }>
        <View style={[styles.gridItem, {backgroundColor: itemData.item.color}]}>
          <Text style={styles.cardtitle} numberOfLines={2}>
            {itemData.item.title}
          </Text>
        </View>
      </TouchableNativeFeedback>
    );
  };
  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  );
}

export default CategoryScreen;
