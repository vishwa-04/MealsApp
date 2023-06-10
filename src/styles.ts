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
  bottomTab: {
    height: 60,
  },
  bottomLabelTab: {
    fontSize: 18,
  },
  drawer: {
    // borderWidth: 2,
    // borderColor: 'yellow',
    marginLeft: 10,
    marginRight: 10,
  },
  mealDetailImage: {
    height: 200,
    width: '100%',
  },
  mealDetailTitle: {
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  mealDetailPoints: {
    color: 'black',
    fontSize: 15,
    backgroundColor: 'rgba(0,0,0,0.1)',
    marginBottom: 10,
  },
  filterTitle: {
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
    color: 'black',
  },
  NoFavText: {
    // justifyContent: 'center',
    fontSize: 22,
    width: '100%',
    marginTop: '70%',
    textAlign: 'center',
    color: 'black',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'center',
  },
  saveTouch: {
    // backgroundColor: 'red',
    padding: 10,
  },
  registrationLogo: {
    // borderWidth: 2,
    // borderColor: 'red',
    height: 200,
    width: 200,
  },
  registrationLogoContainer: {
    alignItems: 'center',
  },
  registerTitle: {
    fontSize: 30,
    color: '#18b5de',
    fontWeight: 'bold',
  },
  detailsContainer: {
    // borderWidth: 2,
    // borderColor: 'red',
    margin: 10,
  },
  input: {
    height: 40,
    fontSize: 20,
    borderWidth: 1,
    padding: 10,
    margin: 20,
    marginBottom: 20,
    borderRadius: 20,
  },
  registerLabel: {
    fontSize: 20,
  },
});
