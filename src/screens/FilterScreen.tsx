import React, {useCallback, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Switch} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../styles';

function FilterScreen({route, navigation}: any): JSX.Element {
  // console.log(props);

  const [isGluttenFree, setIsGluttenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegeterian, setIsVegeterian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  navigation.setOptions({
    title: 'Filter Screen',
    // eslint-disable-next-line react/no-unstable-nested-components
    headerRight: () => (
      <Icon
        name="save"
        size={22}
        color="white"
        style={styles.drawer}
        onPress={route.params?.save}
      />
    ),
  });

  const saveFilter = useCallback(() => {
    const appliedFilters = {
      glutenfree: isGluttenFree,
      vegan: isVegan,
      vegeterian: isVegeterian,
      lactosefree: isLactoseFree,
    };
    console.log(appliedFilters);
  }, [isGluttenFree, isVegan, isVegeterian, isLactoseFree]);
  useEffect(() => {
    navigation.setParams({save: saveFilter});
  }, [navigation, saveFilter]);
  return (
    <View style={styles.screen}>
      <Text style={styles.filterTitle}>Available Filters/Restrictions</Text>
      <View style={styles.filterContainer}>
        <Text>Glutten Free</Text>
        <Switch
          value={isGluttenFree}
          onValueChange={newvalue => setIsGluttenFree(newvalue)}
        />
      </View>
      <View style={styles.filterContainer}>
        <Text>Vegan</Text>
        <Switch
          value={isVegan}
          onValueChange={newvalue => setIsVegan(newvalue)}
        />
      </View>
      <View style={styles.filterContainer}>
        <Text>Vegeterian</Text>
        <Switch
          value={isVegeterian}
          onValueChange={newvalue => setIsVegeterian(newvalue)}
        />
      </View>
      <View style={styles.filterContainer}>
        <Text>Lactose Free</Text>
        <Switch
          value={isLactoseFree}
          onValueChange={newvalue => setIsLactoseFree(newvalue)}
        />
      </View>
    </View>
  );
}
export default FilterScreen;
