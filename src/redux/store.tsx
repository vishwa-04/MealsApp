import {configureStore} from '@reduxjs/toolkit';
import mealReducer from './slice';
import filterReducer from './slice';
import thunk from 'redux-thunk';
// import { type } from "@testing-library/user-event/dist/type";

export const store = configureStore({
  reducer: {
    meals: mealReducer,
    filters: filterReducer,
  },
  middleware: [thunk],
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
