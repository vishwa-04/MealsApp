import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Switch} from 'react-native-paper';
import {styles} from '../styles';

function FilterScreen(): JSX.Element {
  const [isGluttenFree, setIsGluttenFree] = useState();
  const [isVegan, setIsVegan] = useState();
  const [isVegeterian, setIsVegeterian] = useState();
  const [isLactoseFree, setIsLactoseFree] = useState();
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
