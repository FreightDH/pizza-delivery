import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { userReducer } from '@/entities/user/userSlice';
import { orderReducer } from '@/entities/order/orderSlice';

const rootReducer = combineReducers({
  userReducer,
  orderReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
