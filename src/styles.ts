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
    marginBottom: 70,
    // padding: 5,
  },
  itemRow: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  flatlist: {
    width: '100%',
  },
  wholeMeal: {
    flex: 1,
    alignItems: 'center',
    // borderWidth: 2,
    // borderColor: 'black',
    // borderRadius: 20,
  },
  mealheader: {
    height: '100%',
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  bgstyle: {height: '100%', width: '100%', justifyContent: 'flex-end'},
  mealtitle: {
    color: 'white',
    fontSize: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 3,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  mealsDetailsText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
