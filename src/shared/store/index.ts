import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from '@/entities/user/userSlice';

const rootReducer = combineReducers({
  userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
