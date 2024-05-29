import { createSlice } from '@reduxjs/toolkit';
import type { Order } from './types';
import { chickenCheese, pepperoni } from '@/shared/lib/contexts/DishesContext/assets';

interface StateType {
  order: Order;
}

// {
//   id: 0,
//   date: '',
//   sum: 0,
//   bonusesOutcome: 0,
//   bonusesIncome: 0,
//   dishesCount: 0,
//   dishes: {},
// },

const initialState: StateType = {
  order: {
    id: 1,
    date: '16.04.2024 15:36',
    sum: 1650,
    bonusesOutcome: 0,
    bonusesIncome: 82.5,
    dishesCount: 2,
    dishes: {
      'Пепперонни, 40см, традиционное тесто': {
        count: 1,
        price: 925,
        img: pepperoni,
      },
      'Сырный цыпленок, 30см, традиционное тесто': {
        count: 1,
        price: 725,
        img: chickenCheese,
      },
    },
  },
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addDish: (state, action) => {
      const { dish, price, img } = action.payload;

      if (!state.order.dishes[dish]) {
        state.order.dishes[dish] = { count: 0, price: 0, img };
        state.order.dishes[dish].count = 1;
        state.order.dishes[dish].price = price;
      } else {
        const currentCount = state.order.dishes[dish].count;
        const currentPrice = state.order.dishes[dish].price;

        state.order.dishes[dish].count = currentCount + 1;
        state.order.dishes[dish].price = currentPrice + price;
      }

      state.order.sum += price;
      state.order.bonusesIncome = state.order.sum / 20;
      state.order.dishesCount += 1;
    },
  },
});

export const { addDish } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
