import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import {styles} from '../styles';

function CategoryScreen({navigation}): JSX.Element {
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        style={[styles.gridItem, {backgroundColor: itemData.item.color}]}
        onPress={() =>
          navigation.navigate('Home', {categoryID: itemData.item.id})
        }>
        <View>
          <Text>{itemData.item.title}</Text>
          <Text>{itemData.item.id}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  );
}

export default CategoryScreen;
