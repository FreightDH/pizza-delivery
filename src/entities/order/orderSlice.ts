import { createSlice } from '@reduxjs/toolkit';
import type { Order } from './types';

interface StateType {
  order: Order;
}

const initialState: StateType = {
  order: {
    id: 0,
    date: '',
    sum: 0,
    bonusesOutcome: 0,
    bonusesIncome: 0,
    dishesCount: 0,
    dishes: {},
  },
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addDish: (state, action) => {
      const { dish, price } = action.payload;

      state.order.dishes[dish] = state.order.dishes[dish] === undefined ? 1 : state.order.dishes[dish] + 1;
      state.order.sum += price;
      state.order.bonusesIncome = state.order.sum / 20;
      state.order.dishesCount += 1;
    },
  },
});

export const { addDish } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
