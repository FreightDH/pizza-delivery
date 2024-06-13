import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { userReducer } from '@/entities/user';
import { orderReducer } from '@/entities/order';
import { dishesReducer } from '@/entities/dishes';

const rootReducer = combineReducers({
  userReducer,
  orderReducer,
  dishesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
