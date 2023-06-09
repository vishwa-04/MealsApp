import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import {styles} from '../styles';
import {RootStackParamList} from '../types/navigationTypes';

function CategoryScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList>): JSX.Element {
  const renderGridItem = (
    itemData: ListRenderItemInfo<{
      id: string;
      title: string;
      color: string;
    }>,
  ) => {
    return (
      <>
        <TouchableNativeFeedback
          onPress={() =>
            navigation.navigate('CategoryMealScreen', {
              categoryID: itemData.item.id,
              title: itemData.item.title,
            })
          }>
          <View
            style={[styles.gridItem, {backgroundColor: itemData.item.color}]}>
            <Text style={styles.cardtitle} numberOfLines={2}>
              {itemData.item.title}
            </Text>
          </View>
        </TouchableNativeFeedback>
      </>
    );
  };
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={itemData => renderGridItem(itemData)}
    />
  );
}

export default CategoryScreen;
