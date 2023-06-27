import { configureStore } from "@reduxjs/toolkit";
import { counterState } from "../../features/contact/counterSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// export function configureStore() {
//   return createStore(counterReducer);
// }

export const store = configureStore({
  reducer: { counter: counterState.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//this is alos a example of custom hook
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
