import React from 'react';
import {FlatList, View} from 'react-native';
import {MealItem} from '../components/MealItem';
// import {MEALS} from '../data/dummy-data';
import {styles} from '../styles';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

function FavouriteScreen(props: any): JSX.Element {
  const favoMeals = useSelector((state: RootState) => state.meals.favMeals);
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
        data={favoMeals}
        renderItem={renderMealItem}
        style={styles.flatlist}
      />
    </View>
  );
}

export default FavouriteScreen;
