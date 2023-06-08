import {configureStore} from '@reduxjs/toolkit';
import mealReducer from './slice';
import filterReducer from './slice';
import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
// import { type } from "@testing-library/user-event/dist/type";

let rootReducer = combineReducers({
  meals: mealReducer,
  filters: filterReducer,
});

let persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

let persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
