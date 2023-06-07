import {createSlice} from '@reduxjs/toolkit';
import {MEALS} from '../data/dummy-data';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favMeals: [],
};

export const MealSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    mealReducer: (state: any, action) => {
      const mealId = action.payload;
      console.log(mealId);

      const existingIndex = state.favMeals.findIndex(
        (meal: {id: any}) => meal.id === mealId,
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return {...state, favMeals: updatedFavMeals};
      } else {
        const meal = state.meals.find(
          // eslint-disable-next-line @typescript-eslint/no-shadow
          (meal: {id: any}) => meal.id === mealId,
        );
        return {...state, favMeals: state.favMeals.concat(meal)};
      }
    },
    filterReducer: (state: any, action) => {
      const appliedFilters = action.payload;
      const updatedFilteredMeals = state.meals.filter(
        (meal: {
          isGlutenFree: boolean;
          isLactoseFree: boolean;
          isVegetarian: boolean;
          isVegan: boolean;
        }) => {
          if (appliedFilters.glutenfree && !meal.isGlutenFree) {
            return false;
          }
          if (appliedFilters.lactosefree && !meal.isLactoseFree) {
            return false;
          }
          if (appliedFilters.vegetarian && !meal.isVegetarian) {
            return false;
          }
          if (appliedFilters.vegan && !meal.isVegan) {
            return false;
          }
          return true;
        },
      );
      return {...state, filteredMeals: updatedFilteredMeals};
    },
  },
});

export const {mealReducer, filterReducer} = MealSlice.actions;

export default MealSlice.reducer;
