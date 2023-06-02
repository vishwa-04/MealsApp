import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    fontSize: 20,
    color: 'black',
  },
  gridItem: {
    flex: 1,
    height: 150,
    margin: 15,
    borderRadius: 10,
    elevation: 5,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  cardtitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'right',
  },
  mealItem: {
    flex: 1,
    width: '90%',
    height: 100,
    backgroundColor: 'grey',
    marginBottom: 50,
  },
  itemRow: {},
  flatlist: {
    width: '100%',
  },
  wholeMeal: {
    flex: 1,
    alignItems: 'center',
  },
  mealheader: {},
  mealDetail: {},
});
