
import {
  Action,
  ThunkAction,
  configureStore,
} from "@reduxjs/toolkit";
import layoutReducer from "./slices/layout/layoutSlice";
import { useDispatch } from "react-redux";
import signupReducer from "./slices/signup/signupSlice";
import optionReducer  from "./slices/option/optionSlice";
import  editReducer from "./slices/edit/editSlice";
import  renewReducer from"./slices/renew/renewSlice";
import  payReducer from "./slices/pay/paySlice";
import changePlateReducer from "./slices/changePlate/changePlateSlice"
const store = configureStore({
  reducer: {
       layout: layoutReducer,
       signup:signupReducer,
       option:optionReducer,
       edit:editReducer,
       renew:renewReducer,
       pay:payReducer,
       changePlate:changePlateReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
